import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name: FormControl;
  email: FormControl;
  password: FormControl;
  address: FormControl;
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createFormControl();
    this.createForm();
  }

  createFormControl() {
    this.name = new FormControl("", [Validators.required]);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("^ @]*@[^ @]*")
    ]);
    this.password = new FormControl("", [Validators.required]);
    this.address = new FormControl("", Validators.required);
  }

  createForm() {
    this.signUpForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address
    });
  }

  onSubmitButtonClicked() {
    // Code to call the service of registering an user
  }
}
