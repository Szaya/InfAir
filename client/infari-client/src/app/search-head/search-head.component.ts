import { Component, OnInit } from '@angular/core';

export interface SearchParam {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-head',
  templateUrl: './search-head.component.html',
  styleUrls: ['./search-head.component.css']
})

export class SearchHeadComponent implements OnInit {
  searchParams: SearchParam[] = [
    {value: 'startpoint', viewValue: 'Startpoint'},
    {value: 'endpoint', viewValue: 'Endpoint'},
    {value: 'launch', viewValue: 'Launch'},
    {value: 'arrival', viewValue: 'Arrival'},
    {value: 'cost', viewValue: 'Cost'},
    {value: 'sale', viewValue: 'Sale'}
  ];

  actualParam: SearchParam;
  searchValue: string;

  search() {
    if (this.actualParam == "startpoint")
    
    console.log(this.actualParam);
    console.log(this.searchValue);
  }

  searchUpdate(event) {
    this.searchValue = event.target.value;
  }
  selected(event) {
    this.actualParam = event.value;
  }

  constructor() { 
    this.actualParam = null;
    this.searchValue = null;
  }

  ngOnInit() {
  }

}
