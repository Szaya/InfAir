package hu.elte.InfAir.repository;

import hu.elte.InfAir.model.Flight;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightRepository extends CrudRepository<Flight, Integer> {
    Optional<Flight> findById(Integer id);
}
