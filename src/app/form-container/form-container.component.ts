import { Component, OnInit } from '@angular/core';
import {BookserviceService} from "../services/bookservice.service";
import {Book} from "../services/book";

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  public book: Book = {book_id: 0, author: "Author", genre: "Comedy", isbn: "2312", title: "Title"};

  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
  }

  addBook(book: Book){
      this.bookService.addBook(book);
  }
}
