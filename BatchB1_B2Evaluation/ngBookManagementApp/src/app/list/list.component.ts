import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books:any=[];
  constructor(public ListSvc:ProductListService) { }

  ngOnInit() {
    this.books=this.ListSvc.getBooks();
    console.log(this.books);
  }

}
