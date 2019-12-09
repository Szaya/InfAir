import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Book } from '../../domain/book';
import { FlightService } from '../flight.service';
import { Flight } from '../../domain/flight';
import { ExtraService_Service } from '../extraService.service';
import { ExtraService } from '../../domain/extraService';


@Component({
  selector: 'app-my-book-tile',
  templateUrl: './my-book-tile.component.html',
  styleUrls: ['./my-book-tile.component.css']
})
export class MyBookTileComponent implements OnInit {
  @Input('book') book: Book;
  flight: Flight; 
  extraService: ExtraService;

  constructor(
    private flightService: FlightService,
    private extraService_Service: ExtraService_Service,
    public dialog: MatDialog) {
  }

  async ngOnInit() {
    this.flight = await this.flightService.getFlightByID (this.book.flightid);
    this.extraService = await this.extraService_Service.getServiceByID (this.book.serviceid);
  }

  @Output() deleteBook: EventEmitter<Book> = new EventEmitter<Book>();

  showDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result as boolean) {
        this.deleteBook.emit(this.book);
      }
    });
  }

  showServiceDialog(): void {
      const dialogRef = this.dialog.open(ServicesDialog, {
        width: '250px'
      });

      dialogRef.componentInstance.service = this.extraService;

      dialogRef.afterClosed().subscribe(result => {
        const service = result;
        if (service != null) {
          this.extraService = service
          this.saveChangedService(service);
        }
    });
  }
  saveChangedService (service: ExtraService) {
    this.extraService_Service.modifyExtraServices(service);
  }
}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialog>) 
    { }

  onCanlceClick (): void {
    this.dialogRef.close(false);
  }
  onDeleteClick (): void {
    this.dialogRef.close(true);
  }
}

@Component({
  selector: 'services-dialog',
  templateUrl: 'services-dialog.html',
})
export class ServicesDialog {
  service: ExtraService
  constructor(
    public dialogRef: MatDialogRef<ServicesDialog>){}

  onOkClick(): void {
    this.dialogRef.close(this.service);
  }

}
