import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AllBooksComponent} from "./all-books/all-books.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {BookListComponent} from "./book-list/book-list.component";
import {AddBookFormComponent} from "./add-book-form/add-book-form.component";
import {FormContainerComponent} from "./form-container/form-container.component";
import {FoundBooksComponent} from "./found-books/found-books.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'books', component: AllBooksComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'booklist', component: BookListComponent },
  {path: 'addBook', component: FormContainerComponent},
  {path: 'search', component: FoundBooksComponent},
  {path: '**', redirectTo: 'books'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
