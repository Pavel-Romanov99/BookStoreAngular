import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AllBooksComponent} from "./all-books/all-books.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'books', component: AllBooksComponent},
  {path: 'home', component: HomepageComponent},
  {path: '**', redirectTo: 'home'}
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
