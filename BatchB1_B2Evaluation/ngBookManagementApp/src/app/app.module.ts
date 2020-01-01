import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 3.Import RouterModule into AppModule
import { RouterModule, Routes } from '@angular/router';

import { ProductListService } from './product-list.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';


//1. Create all componenets
// 2.Creating Route Table
const appRoutes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'list', component: ListComponent },
{ path: 'details/:id', component: DetailsComponent }];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    
    //4. Registering routes with RouterModule.
    RouterModule.forRoot(appRoutes)
  ],
  // To create a service 
  // 1. Run.... ng g s ProductList
  // 2. Add service in Providers(will auto import the product service)
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 5.Defining RouterLinks and router outlet(Dynamic component loaded )(Dynamic View Container)
//in app.component.html