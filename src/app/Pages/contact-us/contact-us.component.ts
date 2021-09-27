import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  showSendDone: boolean = false;
  showContactForm: boolean = true;
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.contactSend()
    console.log(this.contactUsForm)
  }

  get f() { return this.contactUsForm.controls; }

  contactSend() {
    this.contactUsForm = this.fb.group({
      name: [''],
      email: [''],
      msgSubject: [''],
      message: ['']
    })
  }

  submited(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log()
    if (form.valid) {
      console.log('Name', form.value.name);
      console.log('Email', form.value.email);
      console.log('Subject', form.value.msgSubject);
      console.log('Message', form.value.message);
      // this.showSendDone = true;
      // this.showContactForm = false;
    }
  }
}
