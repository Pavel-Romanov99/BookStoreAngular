import { Component, OnInit } from '@angular/core';
import {BookserviceService} from "../services/bookservice.service";
import {Book} from "../services/book";

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styles: []
})
export class AllBooksComponent implements OnInit {

  public books: Book[] = [];

  constructor(private bookService: BookserviceService) { }

  ngOnInit() {
    this.bookService.getAllBooks()
        .subscribe(data => this.books = data);
  }

}
