import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookPageComponent } from './book-page/book-page.component';
import { SearchHeadComponent } from './search-head/search-head.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FlightService } from './flight.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchResultTileComponent, BookDialog } from './search-result-tile/search-result-tile.component';
import { HomePagePlaceholderComponent } from './home-page-placeholder/home-page-placeholder.component';
import { MyBooksPageComponent } from './my-books-page/my-books-page.component';
import { ModifyPageComponent } from './modify-page/modify-page.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MyBookTileComponent, DeleteDialog, ServicesDialog } from './my-book-tile/my-book-tile.component';
import { LoginComponent } from './login/login.component';
import {RoleDirective} from './role.directive';
import { HeaderInterceptor } from './header-interceptor';
import { BooksService } from './book.service';


@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    SearchHeadComponent,
    SearchResultListComponent,
    SearchResultTileComponent,
    HomePagePlaceholderComponent,
    MyBooksPageComponent,
    ModifyPageComponent,
    BookDialog,
    DeleteDialog,
    ServicesDialog,
    MyBookTileComponent,
    LoginComponent,
    RoleDirective
  ],
  entryComponents: [
    BookDialog,
    DeleteDialog,
    ServicesDialog
  ],
  imports: [
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    RoutingModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    FlightService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
