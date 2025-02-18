import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { userObj } from '../user.model';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  username = 'Sujit';

  userObj: userObj = {
    username: this.username
  }

  onUpdateUserObject(){
    this.userObj.username = Math.random().toString()
  }
}
