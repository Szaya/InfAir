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
import { HttpClientModule } from "@angular/common/http";
import { FlightService } from './flight.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchResultTileComponent } from './search-result-tile/search-result-tile.component';
import { HomePagePlaceholderComponent } from './home-page-placeholder/home-page-placeholder.component';
import { MyBooksPageComponent } from './my-books-page/my-books-page.component';
import { ModifyPageComponent } from './modify-page/modify-page.component';
import { RoutingModule } from './routing/routing.module';

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
  ],
  imports: [
    RoutingModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
