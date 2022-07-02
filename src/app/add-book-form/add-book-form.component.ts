import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {BookserviceService} from "../services/bookservice.service";
import {Book} from '../services/book'

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss']
})
export class AddBookFormComponent implements OnInit {


  @Output() addBook = new EventEmitter<Book>();
  @Input()  public author: String = "";
  @Input()  public genre: String = "";
  @Input()  public title: String = "";
  public book: Book = {book_id: 0, author: this.author, genre: this.genre, isbn: "2312", title: this.title };


  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
  }

  submit(author: String, genre: String, title: String){
    this.book.author =  author;
    this.book.title = title;
    this.book.genre = genre;
    this.bookService.addBook(this.book);
  }

}
