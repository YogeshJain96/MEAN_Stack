import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:string;
  book:any={};
  constructor(private route: ActivatedRoute,public ListSvc:ProductListService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.book=this.ListSvc.getBook(this.id);
    console.log(this.book);
  }

}
