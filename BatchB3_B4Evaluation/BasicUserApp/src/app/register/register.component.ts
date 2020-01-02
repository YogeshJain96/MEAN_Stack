import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = "";
  password: string = "";
  msg: string = "";
  constructor(public svc: UserService) { }

  ngOnInit() {
  }
  onRegister() {
    console.log(this.username,this.password);
   this.msg= this.svc.addUser( { "UserID": this.username, "UserName": this.username, "Password": this.password},);
  }
}
