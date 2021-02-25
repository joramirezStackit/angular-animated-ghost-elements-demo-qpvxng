import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { AVATARS } from '../utils/svg-icon/svg-icon.component';

const URL_MOCK_USERS = 'assets/users.json';
const RESPONSE_DELAY = 1750;

@Component({
  selector: 'employees',
  templateUrl: 'employees.component.html', 
  styleUrls: [ 'employees.component.scss'],
})
export class EmployeesComponent {
  users$ : Observable<any[]>
  useSpinner = false;
  ghosts     = [];

  constructor(private http: HttpClient) {  
    this.reloadList();
  }

  reloadList(useSpinner = false){
    this.useSpinner = useSpinner;
    this.ghosts = new Array(10);       // Mock Ghost items

    this.users$ = this.http
      .get(URL_MOCK_USERS)
      .pipe(
        delay(RESPONSE_DELAY),        // Simulating network latency 
        map(injectAvatars),           // add cartoon avatars 
        tap(() => this.ghosts = [])   // clear ghosts
      );    
  }
}

/**
 * The JsonPlaceHolder service does not provide avatar icons
 * so let's inject token avatars
 */
function injectAvatars(users) {
  const addAvatar = (it, i) => {
    it.avatar = AVATARS[i % AVATARS.length];
    return it;
  };
  return users.map(addAvatar);
}
