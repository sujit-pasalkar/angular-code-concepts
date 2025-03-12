import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-code-concepts';

  data = [1,2,3,4];
  output!:number;
  nums = [0,1,2,3,4,5,6,7,8,9]
  buttuns; 

  input1!:string;
  input2!:string;
  operator!:string;


  constructor(){
    this.buttuns = [...this.nums,'/','*', '-', '+']
  }

  onClick(value:any){
    console.log('bnm:',value);
    if(this.nums.includes(value) && !this.input2){//1
      this.input1 = this.input1+value;
    } else if(this.nums.includes(value) && this.input2){//2
      this.input2 = this.input2+value;
    } else if(this.buttuns.includes(value)){
      this.buttuns = value;
    }

    // 1+2+3-4
    
  }


}
