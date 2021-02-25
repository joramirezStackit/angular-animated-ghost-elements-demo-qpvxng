import { Component, Input } from '@angular/core';
import { trigger } from '@angular/animations';

import { fadeOut } from '../../utils/animations/fade-animations';

@Component({
  selector: 'ghost-list',
  template: `
    <div  *ngFor='let it of ghosts' 
          class='user' fxFlex="50" fxFlex.xs="100" >
      <div class="avatar"></div>
      <div class="lines">
        <h2></h2>
        <h3></h3>
        <p></p>
      </div>
    </div>  
  `,
  styleUrls: [
    './ghost-list.scss',
    './ghost.scss'
  ]
})
export class GhostListComponent {
  @Input() ghosts : any[];
}
