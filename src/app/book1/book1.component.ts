import { ApiService } from '../api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Book1DataSource } from './book1-datasource';

@Component({
  selector: 'app-book1',
  templateUrl: './book1.component.html',
  styleUrls: ['./book1.component.css']
})
export class Book1Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Book1DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['isbn', 'title','author', 'description'];
   
  constructor(private api : ApiService) { 
    
  }
  books : any;
  ngOnInit() {  
     this.dataSource = new Book1DataSource(this.paginator, this.sort);   
  }
}
