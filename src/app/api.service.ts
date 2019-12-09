import { Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const httpOptions = { headers : new HttpHeaders({'Content-Type': 'application/json'})};
const apiUrl = "/api";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
  	if(error.error instanceof ErrorEvent){
  		console.error('An error occurred:', error.error.message);
  	}else{
  		console.error(
  			`Backend returned code ${error.status},  `+ 
  			`body was : ${error.error}`
  		);
  	}
  	return throwError('something bad happended; please try again later');  	
  }
  private extractData(res: Response){
  	let body = res;
  	return body;
  }

  getBooks() : Observable<any>{
    console.log("  ---  " + this.http.get(apiUrl, httpOptions).pipe(map(this.extractData), catchError(this.handleError)));
  	return this.http.get(apiUrl, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
  }

  getBook(id : string) : Observable<any>{
  	const url = `${apiUrl}/${id}`;
  	return this.http.get(url, httpOptions).pipe(
  		map(this.extractData),
  		catchError(this.handleError)
  	);
  }

  postBook(data): Observable<any> {
  	return this.http.post(apiUrl, data, httpOptions).pipe(
  		catchError(this.handleError)
  	);
  }

  updateBook(id, data): Observable<any>{
  	const url =`${apiUrl}/${id}`;
  	return this.http.put(url, data, httpOptions).pipe(
  		catchError(this.handleError)
  	);
  }
  
  deleteBook(id: string) : Observable<{}>{
  	const url = `${apiUrl}/${id}`;
  	return this.http.delete(url, httpOptions).pipe(
  		catchError(this.handleError)
  	);
  }
}
























