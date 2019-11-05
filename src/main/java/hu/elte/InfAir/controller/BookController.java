package hu.elte.InfAir.controller;



import hu.elte.InfAir.model.Book;
import hu.elte.InfAir.model.User;
import hu.elte.InfAir.repository.BookRepository;
import hu.elte.InfAir.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

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
}
