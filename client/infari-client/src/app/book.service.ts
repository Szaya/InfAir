import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../domain/book';

const httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
    })
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {

    private booksUrl = 'http://localhost:8080//books';

  constructor( 
      private http: HttpClient 
    ) { }


  async getBooksForUser(userID: Number) {
      const books = await (this.http.get(this.booksUrl + "//Userid//" + userID)
      .toPromise() as Promise<any[]>);
      if (books == null) {
        return []
      }
    return books.map(this.createBookModel);
  }

  async deleteBooksByID(id: Number) {
    await (this.http.delete(this.booksUrl + "//" + id)
    .toPromise() as Promise<any[]>);
}

  private createBookModel(book: any): Book {
    return {
      ...book,
    } as Book;
  }

  async createBook(book: Book): Promise<any> {
    await this.http.post(this.booksUrl, book).toPromise();
  }
}
