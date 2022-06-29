import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { NavigationComponent } from './navigation/navigation.component';
import { BookContentComponent } from './book-content/book-content.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { AllBooksComponent } from './all-books/all-books.component';
import {RouterModule} from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    BookContentComponent,
    JumbotronComponent,
    NavigationLinkComponent,
    CardComponent,
    AllBooksComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
