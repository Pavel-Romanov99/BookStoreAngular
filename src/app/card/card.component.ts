import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Book} from '../services/book';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() name: String = "";
  @Input() author: String = "";
  @Input() book: Book = {book_id: 0,author: "Author", genre: "Comedy", isbn: "2312", title: "Title"};
  @Output() delete = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }


  deleteBook(){
    this.delete.emit(this.book)
  }

}
