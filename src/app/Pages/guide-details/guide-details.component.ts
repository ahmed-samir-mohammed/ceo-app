import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from 'src/app/core/services/guide.service';
declare let $: any;

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.component.html',
  styleUrls: ['./guide-details.component.scss']
})
export class GuideDetailsComponent implements OnInit {

  sectionTitle = 'الأخبار ذات العلاقة'
  classes: string = 'bg-f4f6fc'
  ceoItem: any;
  id!: any;
  updateCeo!: FormGroup;

  constructor(private ceoListItem: GuideService, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(id => {
      this.id = id.get('id')
    })
    this.getCeoItem();
    this.updateCeoForm()
  }

  getCeoItem() {
    this.ceoListItem.getCeoById(this.id).subscribe((res: any) => {
      this.ceoItem = res;
      this.setValueInput();
    }, err => {
      console.log(err);
    })
  }

  updateCeoForm() {
    this.updateCeo = this.fb.group({
      imageUrl: [''],
      name: [''],
      position: [''],
      email: ['', [Validators.email]],
      phone: [''],
      cvDescription: [''],
      cvUrl: ['']
    })
  }

  get idIn() { return this.updateCeo.get('id'); }
  get imageUrlIn() { return this.updateCeo.get('imageUrl'); }
  get nameIn() { return this.updateCeo.get('name'); }
  get positionIn() { return this.updateCeo.get('position'); }
  get emailIn() { return this.updateCeo.get('email'); }
  get phoneIn() { return this.updateCeo.get('phone'); }
  get cvDescriptionIn() { return this.updateCeo.get('cvDescription'); }
  get cvUrlIn() { return this.updateCeo.get('cvUrl'); }

  setValueInput() {
    // this.imageUrlIn?.setValue(this.ceoItem.imageUrl)
    this.nameIn?.setValue(this.ceoItem.name)
    this.positionIn?.setValue(this.ceoItem.position)
    this.emailIn?.setValue(this.ceoItem.email)
    this.phoneIn?.setValue(this.ceoItem.phone)
    this.cvDescriptionIn?.setValue(this.ceoItem.cvDescription)
    // this.cvUrlIn?.setValue(this.ceoItem.cvUrl)
  }
  
  updateCeoSubmit(form: FormGroup) {
    $('.preloader-area').fadeIn();
    if (form.valid) {
      this.ceoListItem.updateNewCeo({
        id: this.idIn?.value,
        imageUrl: this.imageUrlIn?.value,
        name: this.nameIn?.value,
        position: this.positionIn?.value,
        email: this.emailIn?.value,
        phone: this.phoneIn?.value,
        cvDescription: this.cvDescriptionIn?.value,
        cvUrl: this.cvUrlIn?.value,
      }).subscribe(() => {
        console.log(form.value)
      }, err => {
        console.log(err)
      }, () => {
        $('.preloader-area').fadeOut('slow');
        $('#updateCeo').modal('hide');
      })
    }
  }
}
