import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactSend } from 'src/app/core/pages/contactus';
import { ContactUsService } from 'src/app/core/services/contact-us.service';
declare let $: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  showSendDone: boolean = false;
  showContactForm: boolean = true;
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder, private sendData: ContactUsService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.contactSend()
  }

  contactSend() {
    this.contactUsForm = this.fb.group({
      name: [''],
      email: ['', [Validators.email]],
      msgSubject: [''],
      message: ['']
    })
  }

  get nameIn() { return this.contactUsForm.get('name'); }
  get emailIn() { return this.contactUsForm.get('email'); }
  get msgSubjectIn() { return this.contactUsForm.get('msgSubject'); }
  get messageIn() { return this.contactUsForm.get('message'); }

  submited(form: FormGroup) {
    $('.preloader-area').fadeIn();
    if (form.valid) {
      this.sendData.sendContactForm({
        Name: this.nameIn?.value,
        Email: this.emailIn?.value,
        Subject: this.msgSubjectIn?.value,
        Message: this.messageIn?.value
      }).subscribe(() => {}, err => {
        console.log({err})
      }, () => {
        this.showSendDone = true;
        this.showContactForm = false;
        $('.preloader-area').fadeOut('slow');
      })

    }
  }
}
