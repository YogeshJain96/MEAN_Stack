import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WriteBookComponent } from './write-book/write-book.component';
import { PlagarismReportComponent } from './plagarism-report/plagarism-report.component';
import { BookHubService } from './book-hub.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WriteBookComponent,
    PlagarismReportComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [BookHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
