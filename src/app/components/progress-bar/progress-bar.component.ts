import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements OnInit {
  progress = 0;
  constructor() {

  }

  ngOnInit() {
    this.startProgress();
  }

  startProgress() {
    const numbers = interval(1000);

    const takeFourNumbers = numbers.pipe(take(4));

    takeFourNumbers.subscribe(x => {
      console.log('Next: ', x);
      this.progress = 25*x
    });

  }
}
