import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookPageComponent } from '../book-page/book-page.component';
import { MyBooksPageComponent } from '../my-books-page/my-books-page.component';
import {HomepageComponent} from "../homepage/homepage.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/flights',
    pathMatch: 'full'
  },
  {
    path: 'flights',
    component: HomepageComponent
  },
  {
    path: 'flights/books',
    component: BookPageComponent
  },
  {
    path: 'flights/myBooks',
    component: MyBooksPageComponent
  },
];

@NgModule({
  exports: [ RouterModule ],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) ,
    CommonModule
  ]
})
export class RoutingModule { }
