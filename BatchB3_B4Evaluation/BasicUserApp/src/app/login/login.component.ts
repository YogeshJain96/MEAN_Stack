import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  login: boolean = false;
  msg: string = '';
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.userName + this.password);
    this.login = this.userService.authenticate({ userName: this.userName, password: this.password });
    console.log(this.login);
    if (this.login){
      console.log("success");
      this.msg = "Login Successful";
    }
    else{
      console.log("failed");
      this.msg = "Login Failed";
    }
  
  }

}
