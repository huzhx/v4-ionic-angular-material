import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  options: string[];

  constructor() {
    this.options = [
      'Good parent',
      'Disciplined',
      'Good community member',
      'Staying close to extended family',
      'Strong',
      'On top of things',
      'Respected at home',
      'Considerate',
      'Responsible',
      'In control',
      'Youthful',
      'Popular',
      'Independent',
      'Energetic',
      'Competent',
      'Good spouse/partner',
      'Not hypocritical',
      'Spiritual',
      'Doing God’s will'
    ];
  }
}
