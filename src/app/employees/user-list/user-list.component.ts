import { Component, Input } from '@angular/core';
import { trigger } from '@angular/animations';

import { fadeIn } from '../../utils/animations/fade-animations';

@Component({
  selector: 'user-list',
  animations: [ trigger('fadeIn', fadeIn(':enter')) ],
  template: `
      <div *ngFor='let user of users' 
           [@fadeIn]="users?.length"             
           class="user" fxFlex="50" fxFlex.lt-sm="100">
        <div class="avatar">
          <svg-icon [icon]="user.avatar"></svg-icon>  
        </div>
        <div class="lines">
          <h2>{{user.name}}</h2>
          <h3>{{user.email}}</h3>
          <p><span class="company">Company:</span> {{user.company.name}}</p> 
        </div>
      </div> 
  `,
  styleUrls: [
    './user-list.scss',
    './user.scss'
  ]
})
export class UserListComponent {
  @Input() users : any[];
}
