import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// 3.Import RouterModule into AppModule
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserService } from './user.service';



//1. Create all componenets
// 2.Creating Route Table
const appRoutes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'changepassword', component: ChangePasswordComponent },
{ path: 'users', component: UsersComponent }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,FormsModule ,
    //4. Registering routes with RouterModule.
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 5.Defining RouterLinks and router outlet(Dynamic component loaded )(Dynamic View Container)
//in app.component.html