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
      'Reduce ...',
      'Stay ...',
      'Try...',
      'Write ...',
      'Find ...',
      'Talk ...',
      'Make ...',
      'Stop ...',
      'Choose ...',
      'Replace ...',
      'Read ...',
      'Get ...',
      'Ask ...',
      'Track ...',
      'Become ...',
      'Act ...',
      'Other'
    ];
  }
}
