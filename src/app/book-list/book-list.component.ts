import { Component, OnInit, Input } from '@angular/core';
import {BookListService} from "../services/book-list.service";
import {BookserviceService} from "../services/bookservice.service";
import {List} from "../services/list";
import {Book} from "../services/book";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public lists: List[] = [];
   @Input()  public list_name: String = "";
   public list: List = {listName: "", list_id: 0, books: []};

  constructor(private listService: BookListService) { }

  ngOnInit(): void {
      this.listService.getAllLists();

      this.listService.getLists().subscribe(
             (response) => this.lists = response
      )
  }

  createList(list_name: String){
    this.listService.addList(this.list, list_name);
  }

  deleteFromList(book: Book){
         this.listService.deleteBook(book.book_id);
  }

}
