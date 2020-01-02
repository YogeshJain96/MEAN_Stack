import { Injectable } from '@angular/core';
//ForSingeltonApproach
@Injectable()
//by default
// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
  users: any = [
    { "UserID": 101, "UserName": "user1", "Password": "seed" },
    { "UserID": 102, "UserName": "user2", "Password": "pass123" },
    { "UserID": 103, "UserName": "user3", "Password": "pass123" }
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
    this.users.forEach(user=> {
      if (u.userName == user.userName && u.password == user.password)
        this.status = true;
    });
    
    console.log("status : " + this.status);

    return this.status;
  }
  public addUser(u:any): any {
    console.log(u);
    this.users.push(u);
    return "Registered Successfully";
  }
  public changePassword(u:any): any {
    console.log(u);
    this.users.push(u);
    return "Password Changed";
  }

}
