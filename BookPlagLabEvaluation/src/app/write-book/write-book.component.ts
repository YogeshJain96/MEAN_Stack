import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-write-book",
  templateUrl: "./write-book.component.html",
  styleUrls: ["./write-book.component.css"]
})
export class WriteBookComponent implements OnInit {
  @Input() authorname: string;
  bookid: string = "101";
  bookname: string = "";
  bookcontent: string = "";
  constructor() {}

  ngOnInit() {}
  onSave() {
    console.log("Save Clicked");
    console.log(this.bookname + this.bookcontent);
  }
  onClear() {
    console.log("Clear Clicked");
    this.bookname = "";
    this.bookcontent = "";
  }
}
