import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookPageComponent } from '../book-page/book-page.component';
import { MyBooksPageComponent } from '../my-books-page/my-books-page.component';
import { HomePagePlaceholderComponent } from '../home-page-placeholder/home-page-placeholder.component';
import { ModifyPageComponent } from '../modify-page/modify-page.component';
import { AuthGuard } from '../auth.guard';
import { UserRole } from '../../domain/user-role';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/flights',
    pathMatch: 'full'
  },
  {
    path: 'flights',
    component: HomePagePlaceholderComponent,
    data: {
      roles: [UserRole.User, UserRole.Operator, UserRole.Admin],
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'flights/books',
    component: BookPageComponent,
    data: {
      roles: [UserRole.User],
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'flights/myBooks',
    component: MyBooksPageComponent,
    data: {
      roles: [UserRole.User],
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'flights/modify',
    component: ModifyPageComponent,
    data: {
      roles: [UserRole.Operator, UserRole.Admin],
    },
    canActivate: [AuthGuard]
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
