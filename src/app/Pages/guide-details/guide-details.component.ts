import { CeoList } from 'src/app/core/pages/guide';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from 'src/app/core/services/guide.service';
import { SendFileService } from 'src/app/core/services/send-file.service';
import { SendImageService } from 'src/app/core/services/send-image.service';
declare let $: any;

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.component.html',
  styleUrls: ['./guide-details.component.scss'],
})
export class GuideDetailsComponent implements OnInit {
  ceoItem: CeoList = {
    id: 0,
    image: '',
    cvUrl: '',
    company: '',
    createdDate: '',
    cvDescription: '',
    cvNote: '',
    imageUrl: '',
    linkedIn: '',
    name: '',
    twitter: '',
    position: '',
    email: '',
    ceoNews: [
      {
        id: 0,
        description: '',
        image: '',
        note: '',
        title: '',
        createDate: '',
        tags: null,
      },
    ],
  };
  id!: any;
  updateCeo!: FormGroup;
  imgPathUrl!: string;
  fileName!: string;
  responseFileName!: string;
  responseImageName!: string;
  showInLargScreen!: boolean;
  showInSmallScreen!: boolean;

  constructor(
    private ceoListItem: GuideService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private sendImage: SendImageService,
    private sendFile: SendFileService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((id) => {
      this.id = id.get('id');
    });
    this.getCeoItem();
    this.updateCeoForm();
    this.changeViewInScreenSize();
  }

  changeViewInScreenSize() {
    if (window.innerWidth >= 991) {
      this.showInLargScreen = true;
      this.showInSmallScreen = false;
    } else {
      this.showInLargScreen = false;
      this.showInSmallScreen = true;
    }
  }

  getCeoItem() {
    this.ceoListItem.getCeoById(this.id).subscribe(
      (res: any) => {
        this.ceoItem = res;
        console.log(this.ceoItem);
        this.setValueInInputs();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateCeoForm() {
    this.updateCeo = this.fb.group({
      imageUrl: [''],
      name: [''],
      position: [''],
      email: ['', [Validators.email]],
      cvDescription: [''],
      cvUrl: [''],
      ceoId: [''],
    });
  }

  get imageUrlIn() {
    return this.updateCeo.get('imageUrl');
  }
  get nameIn() {
    return this.updateCeo.get('name');
  }
  get positionIn() {
    return this.updateCeo.get('position');
  }
  get emailIn() {
    return this.updateCeo.get('email');
  }
  get cvDescriptionIn() {
    return this.updateCeo.get('cvDescription');
  }
  get cvUrlIn() {
    return this.updateCeo.get('cvUrl');
  }

  setValueInInputs() {
    this.imgPathUrl = `http://saudiceos.alishehata.info/Content/Data/Ceo/images/${this.ceoItem.imageUrl}`;
    this.nameIn?.setValue(this.ceoItem.name);
    this.positionIn?.setValue(this.ceoItem.position);
    this.emailIn?.setValue(this.ceoItem.email);
    this.cvDescriptionIn?.setValue(this.ceoItem.cvDescription);
    this.cvUrlIn?.setValue(this.ceoItem.cvUrl);
  }

  onSelectImage(e: any) {
    if (e.target.files) {
      const renderImage = new FileReader();
      renderImage.readAsDataURL(e.target.files[0]);
      renderImage.onload = (event: any) => {
        this.imgPathUrl = event.target.result;
        this.formDataImg();
        this.imageUrlIn?.setValue(this.responseImageName);
      };
    }
  }

  onSelectFile(e: any) {
    this.fileName = e.target.files[0].name;
    if (e.target.files) {
      const renderFile = new FileReader();
      renderFile.readAsDataURL(e.target.files[0]);
      renderFile.onload = (event: any) => {
        this.formDataFile();
        this.cvUrlIn?.setValue(this.responseFileName);
      };
    }
  }

  formDataImg() {
    const formDataImg = new FormData();
    formDataImg.append('img', this.imageUrlIn?.value);
    this.sendImage.sendImage(formDataImg).subscribe(
      (res) => {
        this.responseImageName = res;
        console.log(this.responseImageName);
      },
      (err) => console.log(err)
    );
  }

  formDataFile() {
    const formDataFile = new FormData();
    formDataFile.append('file', this.cvUrlIn?.value);
    this.sendFile.sendFile(formDataFile).subscribe(
      (res) => {
        this.responseFileName = res;
        console.log(this.responseFileName);
      },
      (err) => console.log(err)
    );
  }

  formData(form: FormGroup) {
    if (form.valid) {
      this.ceoListItem
        .updateNewCeo({
          imageUrl: this.responseImageName,
          name: this.nameIn?.value,
          position: this.positionIn?.value,
          email: this.emailIn?.value,
          cvDescription: this.cvDescriptionIn?.value,
          cvUrl: this.responseFileName,
          ceoId: this.id,
        })
        .subscribe(
          () => {
            console.log(form.value);
          },
          (err) => {
            console.log(err);
          },
          () => {
            $('.preloader-area').fadeOut('slow');
            $('#updateCeo').modal('hide');
          }
        );
    }
  }

  updateCeoSubmit(form: FormGroup) {
    $('.preloader-area').fadeIn();
    this.formData(form);
  }
}
