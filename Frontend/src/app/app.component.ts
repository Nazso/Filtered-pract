import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users?: Observable<UserModel[]>;
  filter = {
    firstName: '',
    lastName: ''
  }
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers()
  }
  
  loadUsers() {
    this.users = this.userService.getUser(this.filter);
  }


}
