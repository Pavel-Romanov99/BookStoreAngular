import { Injectable } from '@angular/core';
import {Book} from "./book";
import {List} from "./list"
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookListService {

    constructor(private http: HttpClient) { }

    public getAllLists(){
      this.http.get<List[]>(environment.apiBackEndEndPoint + "/booklist").subscribe(
        response => {
          console.log(response);
        }
      )
    }

    getLists(): Observable<List[]>{
       return this.http.get<List[]>(environment.apiBackEndEndPoint + "/booklist");
    }


  addList(list: List, listName: String){
     this.http.post(environment.apiBackEndEndPoint + "/booklist?listName=" + listName, list).subscribe(
         result => console.log(result)
     )
  }

  deleteBook(BookId: number){
      this.http.delete(environment.apiBackEndEndPoint +  "/booklist/deleteFromList/1/book/" + BookId).subscribe(
          result => console.log(result)
      )
  }
}
