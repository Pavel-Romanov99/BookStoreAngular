import { Component, OnInit, Input } from '@angular/core';
import {BookserviceService} from "../services/bookservice.service";
import {Book} from "../services/book";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public foundBooks: Book[] = [];
  @Input() public search: String = "George RR Martin";

  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
  }

  searchBook(search: String){
      this.bookService.searchBook(search).subscribe(
        (response) => this.foundBooks = response
      )
  }
}
