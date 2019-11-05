package hu.elte.InfAir.repository;

import hu.elte.InfAir.model.Flight;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FlightRepository extends CrudRepository<Flight, Integer> {
    Optional<Flight> findById(Integer id);
    Iterable<Flight> findAll();
    Iterable<Flight> findByStartpoint(String startpoint);
    Iterable<Flight> findByEndpoint(String endpoint);
    Iterable<Flight> findByLaunch(String launch);
    Iterable<Flight> findByArrival(String arrival);
    Iterable<Flight> findByCost(Integer cost);
    Iterable<Flight> findBySale(Float sale);
}
