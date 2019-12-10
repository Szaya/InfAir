import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Flight } from '../../domain/flight';
import { ExtraService } from '../../domain/extraService';
import { Book } from '../../domain/book';
import { ExtraService_Service } from '../extraService.service';
import { BooksService } from '../book.service';

@Component({
  selector: 'app-search-result-tile',
  templateUrl: './search-result-tile.component.html',
  styleUrls: ['./search-result-tile.component.css']
})
export class SearchResultTileComponent implements OnInit {
  @Input('value') flight: Flight;
  
  constructor(
    private extraService: ExtraService_Service,
    private bookService: BooksService,
    public dialog: MatDialog) {}

  showBookDialog(): void {
    const dialogRef = this.dialog.open(BookDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const service = result;
      if (service != null) {
        this.saveService(service).then(this.saveBook.bind(this));
      }
    });
  }
  async saveService (service: ExtraService) {
    return await this.extraService.createExtraService(service);
  }

  saveBook(serviceId: number){
    this.bookService.createBook({
      id: -1,
      userid: -1,
      flightid: this.flight.id,
      serviceid: serviceId,
    } as Book );
    
  }

  ngOnInit() { }

}

@Component({
  selector: 'book-dialog',
  templateUrl: 'book-dialog.html',
})
export class BookDialog {
  service: ExtraService;

  constructor(
    public dialogRef: MatDialogRef<BookDialog>) 
    {
      this.service = {
        id: -1,
        specialseat: false,
        nexttowindow: false,
        biggerfootspace: false,
        extrasuitecase: false,
        bagcar: false
      } as ExtraService;
    }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onOkClick(): void {
    this.dialogRef.close(this.service);
  }

}
