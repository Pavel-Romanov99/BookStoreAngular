import { Component, OnInit, Input } from '@angular/core';
import {BookserviceService} from "../services/bookservice.service";
import {Book} from "../services/book";

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styles: []
})
export class AllBooksComponent implements OnInit {

  public books: Book[] = [];
  public name: string = "";
  public author: string = "";

  constructor(private bookService: BookserviceService) { }

  ngOnInit() {
    this.bookService.getAllBooks();

    this.bookService.getBooks().subscribe(
      (response) => this.books = response
    )
  }

}
