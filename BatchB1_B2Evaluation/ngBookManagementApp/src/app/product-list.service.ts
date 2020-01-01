import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  //  Declaring an empty array of books
  books:any=[];
  book:any={};

  constructor() { }
  // Adding a method to service
  public getBooks():any{
    //BookID, Title, category, Availalbe 
    this.books=[
      {"BookID":101,"Title": "Book1","category": "Book category Here", "availalbe": true},
      {"BookID":102,"Title": "Book2","category": "Book category Here", "availalbe": false},
      {"BookID":103,"Title": "Book3","category": "Book category Here", "availalbe": true}
   ];
    return this.books;
  }

  public getBook(id):any{
    //BookID, Title, category, availalbe 
    this.book={"BookID":id,"Title": "Book1","category": "Book category Here", "availalbe": true};
    return this.book;
  }

}
