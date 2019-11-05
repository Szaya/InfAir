package hu.elte.InfAir.controller;

import hu.elte.InfAir.model.Flight;
import hu.elte.InfAir.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/flights")
public class FlightController {
    
    @Autowired
    private FlightRepository flightRepository;

    @GetMapping("")
    public Iterable<Flight> getFlights() {
        return flightRepository.findAll();
    }
    
    @PostMapping("")
    public ResponseEntity<Flight> createFlight(
            @RequestBody Flight flight
    ) {
        Flight savedFlight = flightRepository.save(flight);
        return ResponseEntity.ok(savedFlight);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity deleteFlight(
            @PathVariable Integer id
    ) {
        try {
            flightRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}

