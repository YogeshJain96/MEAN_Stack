import { Injectable } from "@angular/core";
import { BindingFlags } from "@angular/compiler/src/core";

@Injectable({
  providedIn: "root"
})
export class BookHubService {
  authors: any = [
    {
      authID: 101,
      username: "author1",
      password: "pass123",
      Books: [
        { BookName: "Book1", Content: "abcd" },
        { BookName: "Book2", Content: "abcd" }
      ]
    },
    {
      authID: 102,
      username: "author2",
      password: "pass123",
      Books: [
        { BookName: "Book3", Content: "abcd" },
        { BookName: "Book4", Content: "abcd" }
      ]
    },
    {
      authID: 103,
      username: "author3",
      password: "pass123",
      Books: [
        { BookName: "Book5", Content: "abcd" },
        { BookName: "Book6", Content: "abcd" }
      ]
    }
  ];
  author: any = "";
  loginFlag: boolean = false;
  constructor() {}
  public onAuthenticate(u: any) {
    this.authors.forEach(user => {
      if (u.username == user.username && u.password == user.password)
        this.loginFlag = true;
    });

    return this.loginFlag;
  }
  public getAuthors(): any {
    return this.authors;
  }
  public getAuthor(u: any): any {
    this.authors.forEach(user => {
      if (u.username == user.username) this.author = user;
    });
    return this.author;
  }

  public onSaveBook(u: any) {
    this.authors.forEach(user => {
      if (u.username == user.username) {
        this.author = user;
        this.author.Books.push({
          BookName: u.bookname,
          Content: u.bookcontent
        });
      }
    });

    return this.author.Books;
  }
  book1: string = "";
  book2: string = "";
  report: any = [];

  onGenerateReport(obj: any) {
    let rWords = [];
    let rSentence=[];
    this.book1 = obj.book1;
    this.book2 = obj.book2;
    this.report.push(this.book1.split(" ").length);
    this.report.push(this.book2.split(" ").length);
    this.report.push(this.book1.split(".").length);
    this.report.push(this.book2.split(".").length);
    //Repeated Words
    this.book1.split(" ").forEach(word1 => {
      this.book2.split(" ").forEach(word2 => {
        if (word1.trim() == word2.trim()) {
          rWords.push(word1);
        }
      });
    });
    this.report.push(rWords.toString());

    this.book1.split(".").forEach(sentence1 => {
      this.book2.split(".").forEach(sentence2 => {
        if (sentence1.trim() == sentence2.trim()) {
          rSentence.push(sentence1);
        }
      });
    });
    this.report.push(rSentence.toString());

    return this.report;
  }
}
