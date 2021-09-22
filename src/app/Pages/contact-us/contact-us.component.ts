import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  showSendDone: boolean = false;
  showContactForm: boolean = true;
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactUsForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msgSubject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]],
    })
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  submited(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    
    if (form.valid) {
      console.log('Name', form.value.name);
      console.log('Email', form.value.email);
      console.log('Subject', form.value.msgSubject);
      console.log('Message', form.value.message);
      this.showSendDone = true;
      this.showContactForm = false;
    }
  }
}
