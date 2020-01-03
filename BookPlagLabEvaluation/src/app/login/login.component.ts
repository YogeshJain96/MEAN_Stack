import { Component, OnInit } from "@angular/core";
import { BookHubService } from "../book-hub.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  msg: string = "";
  loginFlag: boolean = false;
  author: any = {};
  /////////////////////////////////////////////////////////

  authorname: string = "";
  bookid: string = "101";
  bookname: string = "";
  bookcontent: string = "";
  showPlag: boolean = false;
  /////////////////////////////////////////////////////////

  book1name: string = "";
  book2name: string = "";
  n1Words: number = 0;
  n2Words: number = 0;
  n1Sentences: number = 0;
  n2Sentences: number = 0;
  rWords: any;
  rSentences: any;

  constructor(public svcBook: BookHubService) {}

  ngOnInit() {}
  /////////////////////////////////////////////////////////
  onLogin() {
    console.log(
      "Login->Username:" + this.username + "-----pass:" + this.password
    );
    if (
      this.svcBook.onAuthenticate({
        username: this.username,
        password: this.password
      })
    ) {
      this.loginFlag = true;
      this.authorname = this.username;
    } else {
      this.loginFlag = false;
      this.msg = "Login Failed";
    }
  }
  /////////////////////////////////////////////////////////
  onSave() {
    console.log("Save Clicked");
    console.log(this.bookname + this.bookcontent);
    this.showPlag = true;
    console.log(
      this.svcBook.onSaveBook({
        username: this.username,
        bookname: this.bookname,
        bookcontent: this.bookcontent
      })
    );
  }
  onClear() {
    console.log("Clear Clicked");
    this.bookname = "";
    this.bookcontent = "";
  }
  /////////////////////////////////////////////////////////
  report: any[];
  generateReport() {
    console.log("Generate Report");
    this.author = this.svcBook.getAuthor({ username: this.authorname });
    console.log(this.author);
    this.report = this.svcBook.onGenerateReport({
      book1:
        "JavaScript often abbreviated as JS, is a high-level, just-in-time compiled, object-oriented programming language that conforms to the ECMAScript specification.[10] JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[11] JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it,[12] and major web browsers have a dedicated JavaScript engine to execute it. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has APIs for working with text, arrays, dates, regular expressions, and the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities. It relies upon the host environment in which it is embedded to provide these features.Plagiarism is copying another person.",
      book2:
        "Plagiarism is copying another person.'s ideas, words or writing and pretending that they are one's own work. It can involve violating copyright laws. College students who are caught plagiarizing can be expelled from school. It can permanently damage a student's reputation."
    });

    console.log(this.report);
    this.book1name = "";
    this.book2name = "";
    this.n1Words = this.report[0];
    this.n2Words = this.report[1];
    this.n1Sentences = this.report[2];
    this.n2Sentences = this.report[3];
    this.rWords = this.report[4];
    this.rSentences = this.report[5];
  }
}
