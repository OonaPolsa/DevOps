import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  headerText: string = "Give feedback";

  fbForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
    description: new FormControl('', [Validators.required, Validators.minLength(2)]),
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    termsAndConditions: new FormControl('')
  });

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['home']);
  }

  onSubmit() {
    this.fbForm.reset();
    this.fbForm.controls['title'].setErrors(null);
    this.fbForm.controls['description'].setErrors(null);
    this.fbForm.controls['name'].setErrors(null);
    this.fbForm.controls['email'].setErrors(null);
    this.fbForm.controls['phone'].setErrors(null);
  }

  get title() {
    return this.fbForm.get('title');
  }

  get description() {
    return this.fbForm.get('description');
  }

  get name() {
    return this.fbForm.get('name');
  }

  get email() {
    return this.fbForm.get('email');
  }

  get phone() {
    return this.fbForm.get('phone');
  }

  get termsAndConditions() {
    return this.fbForm.get('termsAndConditions');
  }

}
