package hu.elte.InfAir.controller;



import hu.elte.InfAir.model.Book;
import hu.elte.InfAir.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/{id}")
    public Optional<Book> getBookById(
            @PathVariable Integer id
    ) {
        return bookRepository.findById(id);
    }

    @GetMapping("")
    public Iterable<Book> getBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/Userid/{userid}")
    public Iterable<Book> getBookByUserid(
            @PathVariable Integer userid
    ) {
        return bookRepository.findByUserid(userid);
    }

    @GetMapping("/Flightid/{flightid}")
    public Iterable<Book> getBookByFlightid(
            @PathVariable Integer flightid
    ) {
        return bookRepository.findByFlightid(flightid);
    }

    @GetMapping("/Serviceid/{serviceid}")
    public Iterable<Book> getBookByServiceid(
            @PathVariable Integer serviceid
    ) {
        return bookRepository.findByServiceid(serviceid);
    }

    @PostMapping("")
    public ResponseEntity<Book> createBook(
            @RequestBody Book book
    ) {
        Book savedBook = bookRepository.save(book);
        return ResponseEntity.ok(savedBook);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteBook(
            @PathVariable Integer id
    ) {
        try {
            bookRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
