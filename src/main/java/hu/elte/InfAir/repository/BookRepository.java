package hu.elte.InfAir.repository;


import hu.elte.InfAir.model.Book;
import hu.elte.InfAir.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {
    Optional<Book> findById(Integer id);
    Iterable<Book> findAll();
    Iterable<Book> findByUserid(Integer userid);
    Iterable<Book> findByFlightid(Integer flightid);
    Iterable<Book> findByServiceid(Integer servicedid);

}
