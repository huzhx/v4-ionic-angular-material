import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  testForm: FormGroup;
  options: string[];

  constructor(private formBuilder: FormBuilder) {
    this.options = [
      'Strong',
      'Popular',
      'Youthful',
      'Spiritual',
      'Energetic',
      'Competent',
      'Considerate',
      'Responsible',
      'Disciplined',
      'Independent',
      'In control',
      'Good parent',
      'Not hypocritical',
      'Doing God’s will',
      'On top of things',
      'Respected at home',
      'Good spouse/partner',
      'Good community member',
      'Staying close to extended family'
    ];
    this.createForm();
  }

  createForm() {
    this.testForm = this.formBuilder.group({
      values: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('click submit button');
    console.log(this.testForm.value);
  }
}
