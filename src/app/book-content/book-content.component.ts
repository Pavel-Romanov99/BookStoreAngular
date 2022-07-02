import { Component, OnInit } from '@angular/core';
import {BookserviceService} from "../services/bookservice.service";
import {Book} from "../services/book";

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit {

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

   deleteBook(book: Book){
       this.bookService.deleteBook(book.book_id);
            this.bookService.getBooks().subscribe(
              (response) => this.books = response
            )
   }
}
