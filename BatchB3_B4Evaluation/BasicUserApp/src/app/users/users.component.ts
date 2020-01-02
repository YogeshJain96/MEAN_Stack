import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(public userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers();
    console.log(this.users);
  }

}
