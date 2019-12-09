import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookPageComponent } from '../book-page/book-page.component';
import { MyBooksPageComponent } from '../my-books-page/my-books-page.component';
import { HomePagePlaceholderComponent } from '../home-page-placeholder/home-page-placeholder.component';
import { ModifyPageComponent } from '../modify-page/modify-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/flights',
    pathMatch: 'full'
  },
  {
    path: 'flights',
    component: HomePagePlaceholderComponent
  },
  {
    path: 'flights/books',
    component: BookPageComponent
  },
  {
    path: 'flights/myBooks',
    component: MyBooksPageComponent
  },
  {
    path: 'flights/modify',
    component: ModifyPageComponent
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