import { CeoList } from 'src/app/core/pages/guide';
import { SendFileService } from './../../core/services/send-file.service';
import { SendImageService } from './../../core/services/send-image.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuideService } from 'src/app/core/services/guide.service';
import { environment as env } from 'src/environments/environment';
declare let $: any;

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss'],
})
export class GuideComponent implements OnInit {
  ceoList: CeoList[] = [];
  pageNumber: number = 1;
  itemPerPage: number = env.itemPerPage;
  totalItemCount: number = 8;
  searchText: string = '';
  addCeo!: FormGroup;
  imgPathUrl!: string;
  fileName!: string;
  responseFileName!: string;
  responseImageName!: string;

  constructor(
    private ceoListItem: GuideService,
    private fb: FormBuilder,
    private sendImage: SendImageService,
    private sendFile: SendFileService
  ) {}

  ngOnInit(): void {
    this.getAllCeo();
    this.addCeoForm();
  }

  // Get All News List
  getAllCeo() {
    this.ceoListItem
      .getAllCeoInPage(this.pageNumber, env.itemPerPage, this.searchText)
      .subscribe(
        (res: any) => {
          this.ceoList = res.data;
          this.totalItemCount = res.totalItemCount;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  changePage(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getAllCeo();
  }

  addCeoForm() {
    this.addCeo = this.fb.group({
      imageUrl: [''],
      name: [''],
      position: [''],
      email: ['', [Validators.email]],
      cvDescription: [''],
      cvUrl: [''],
    });
  }

  get imageUrlIn() {
    return this.addCeo?.get('imageUrl');
  }
  get nameIn() {
    return this.addCeo?.get('name');
  }
  get positionIn() {
    return this.addCeo?.get('position');
  }
  get emailIn() {
    return this.addCeo?.get('email');
  }
  get cvDescriptionIn() {
    return this?.addCeo.get('cvDescription');
  }
  get cvUrlIn() {
    return this.addCeo?.get('cvUrl');
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
        .addNewCeo({
          imageUrl: this.responseImageName,
          name: this.nameIn?.value,
          position: this.positionIn?.value,
          email: this.emailIn?.value,
          cvDescription: this.cvDescriptionIn?.value,
          cvUrl: this.responseFileName,
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
            $('#addCeo').modal('hide');
          }
        );
    }
  }

  addCeoSubmit(form: FormGroup) {
    $('.preloader-area').fadeIn();
    console.log(form);
  }
}
