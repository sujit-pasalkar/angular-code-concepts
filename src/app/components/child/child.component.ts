import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { userObj } from '../user.model';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-child',
  imports: [JsonPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() username!: string;
  @Input() userObj!: userObj;


  constructor(){

  }

  ngOnInit(){}

  ngOnChanges(changes:SimpleChanges){
    console.log('simpleChange:',changes);

  }

  ngDoCheck(): void {
    console.log('Docheck');
  }
}
