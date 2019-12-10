import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchResultListComponent } from '../search-result-list/search-result-list.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  @ViewChild(SearchResultListComponent ) child: SearchResultListComponent ; 

  constructor() { 
  }

  ngOnInit() {
  }

  searchDetailsChanged(event) {
    this.child.searchChanged (event.searchBy, event.searchFor);
  }

}
