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

  contactUsForm!: FormGroup
  constructor(private fb: FormBuilder) {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msgSubject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    console.log(this.contactUsForm)
  }

  submited() {
    console.log(this.contactUsForm)
  }

  submitContact() {
    if (!this.contactUsForm.valid) {
      // this.showSendDone = true;
      // this.showContactForm = false;
    }
  }

}
