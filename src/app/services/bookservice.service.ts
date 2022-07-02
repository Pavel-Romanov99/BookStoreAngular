import { Injectable } from '@angular/core';
import {Book} from "./book";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  public getAllBooks(){
    this.http.get<Book[]>(environment.apiBackEndEndPoint + "/books").subscribe(
      (response: Book[]) => {
        console.log(response);
      }
    )
  }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(environment.apiBackEndEndPoint + "/books");
  }

  deleteBook(BookId: number){
      this.http.delete(environment.apiBackEndEndPoint +  "/books/" + BookId).subscribe(
          result => console.log(result)
      )
  }

  addBook(book: Book){
      this.http.post(environment.apiBackEndEndPoint + "/books", book).subscribe(
        result => console.log(result)
      )
  }

  searchBook(search: String): Observable<Book[]>{
      return this.http.get<Book[]>(environment.apiBackEndEndPoint + "/filter/author/" + search);
   }

}
