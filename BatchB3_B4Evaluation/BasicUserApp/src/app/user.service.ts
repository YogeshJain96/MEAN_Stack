import { Injectable } from '@angular/core';
//ForSingeltonApproach
@Injectable()
//by default
// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
  users: any = [
    { "UserID": 101, "UserName": "User1", "Password": "pass123" },
    { "UserID": 102, "UserName": "User2", "Password": "pass123" },
    { "UserID": 103, "UserName": "User3", "Password": "pass123" }
  ];

  status: Boolean;

  constructor() { }

  // Adding a method to service
  public getUsers(): any {
    return this.users;
  }
  public authenticate(u: any): any {
    console.log(u);

    this.status = false;

    if (u.userName == "User1" && u.password == "seed")
      this.status = true;
    else
      this.status = false;
    console.log("status : " + this.status);

    return this.status;
  }
  public addUser(u:any): any {
    console.log(u);
    this.users.push(u);
    return "success";
  }
  public changePassword(u:any): any {
    console.log(u);
    this.users.push(u);
    return "success";
  }

}
