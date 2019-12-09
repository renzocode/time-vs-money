import { ApiService  } from '../api.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	  books : any;
   	dataSource = new BookDataSource(this.api); 
    displayedColummns = ['isbn', 'title', 'author'];
   	constructor(private api : ApiService) { 
    }
    ngOnInit() {   
    	this.api.getBooks().subscribe(
    		res =>{
    			this.books  = res;
    			console.log(this.books);
    		}, err => {
    			console.log(err);
    		}
    	);
    }

}

export class BookDataSource extends DataSource<any> {
	  books : any;
	
	  constructor(private api: ApiService){
		  super();
		  console.log("constructor in BookDataSource ");

	  }
    connect() {
		   return this.api.getBooks();
	  }
    		
	  disconnect() {

	  }
}