package hu.elte.InfAir.repository;

import hu.elte.InfAir.model.Flight;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FlightRepository extends CrudRepository<Flight, Integer> {
    Optional<Flight> findByStartpoint(String startpoint);
    Iterable<Flight> findAll();
}
