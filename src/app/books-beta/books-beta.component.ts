import { Component, OnInit, AfterViewInit } from '@angular/core';
import  { DataSource } from '@angular/cdk/collections';


export interface BookElement{
  isbn: string,
  title : string,
  description : string,
  author : string,
  publisher : string, 
  publisher_year : string,
  updated_data : string
}


@Component({
  selector: 'app-books-beta',
  templateUrl: './books-beta.component.html',
  styleUrls: ['./books-beta.component.css']
})
export class BooksBetaComponent implements AfterViewInit{

	dataSource : BookDataSource;
  	constructor() { }

  	ngAfterViewInit() {
  		console.log("hello world");
  	}

}

export class BookDataSource extends DataSource<any>{
	book : any;M
	constructor(){
		super();
	}

	connect(){
		return this.book;
	}
	disconnect(){

	}
}
