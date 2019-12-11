import { ApiService  } from '../api.service';
import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface ELEMENT_DATA {
  _id : string
  isbn : string,
  title : string,
  description : string,
  author : string,
  publisher : string,
  published_year : string,
  updated_date : string
}
/**
 * @title Basic CDK data-table
 */
@Component({
  selector: 'app-book',
  styleUrls: ['./book.component.css'],
  templateUrl: './book.component.html',
})
export class BookComponent  implements OnInit{
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['isbn', 'title', 'description', 'author' , 
  'publisher', 'published_year', 'updated_date'];

  dataSource : ExampleDataSource;
  data : ELEMENT_DATA[];

  constructor(private api : ApiService){ 
  }

  ngOnInit(){
    this.api.getBooks().subscribe(data => {
      this.data = data;
      this.dataSource = new ExampleDataSource(this.data);
    });
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<ELEMENT_DATA> {
  /** Stream of data that is provided to the table. */
  data : BehaviorSubject<ELEMENT_DATA[]>;

  constructor(element : ELEMENT_DATA[]){
    super();
    this.data = new BehaviorSubject<ELEMENT_DATA[]>(element);
  }
  //data = new BehaviorSubject<ELEMENT_DATA[]>(this.element_data);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ELEMENT_DATA[]> {
    return this.data;
  }

  disconnect() {}
}