import { Component, OnInit } from '@angular/core';

import { BooksService } from '../book.service';
import { Book } from '../../domain/book';


@Component({
  selector: 'app-my-books-page',
  templateUrl: './my-books-page.component.html',
  styleUrls: ['./my-books-page.component.css']
})
export class MyBooksPageComponent implements OnInit {
  books: Book[];

  constructor(
    private bookService: BooksService
    ) { }

    async ngOnInit() {
      this.books = await this.bookService.getBooksForUser(-1 as Number);
    }

    deleteBook(book: Book) {
      const index = this.books.indexOf(book, 0);
      if (index > -1) {
        this.books.splice(index, 1);
      }
      this.bookService.deleteBooksByID(book.id as Number);
    }
}
