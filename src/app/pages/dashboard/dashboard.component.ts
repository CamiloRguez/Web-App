import {Component} from '@angular/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  currentUserId = 'asf';
  currentToken = '';
  
  constructor() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentToken = currentUser.token;
    this.currentUserId = currentUser.email;
    console.log(this.currentUserId);
}

}
