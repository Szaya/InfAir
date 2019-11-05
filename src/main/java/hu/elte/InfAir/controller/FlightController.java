package hu.elte.InfAir.controller;

import hu.elte.InfAir.model.Flight;
import hu.elte.InfAir.repository.FlightRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
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
    
    @GetMapping("/{id}")
    public Optional<Flight> getFlightById(
            @PathVariable Integer id
    ) {
        return flightRepository.findById(id);
    }
    
    @GetMapping("")
    public Iterable<Flight> getFlights() {
        return flightRepository.findAll();
    }
    
    @GetMapping("/Startpoint/{startpoint}")
    public Iterable<Flight> getFlightByStartpoint(
            @PathVariable String startpoint
    ) {
        return flightRepository.findByStartpoint(startpoint);
    }
    
    @GetMapping("/Endpoint/{endpoint}")
    public Iterable<Flight> getFlightByEndpoint(
            @PathVariable String endpoint
    ) {
        return flightRepository.findByEndpoint(endpoint);
    }
   
    @GetMapping("/Launch/{launch}")
    public Iterable<Flight> getFlightByLaunch(
            @PathVariable String launch
    ) {
        return flightRepository.findByLaunch(launch);
    }
    
    @GetMapping("/Arrival/{arrival}")
    public Iterable<Flight> getFlightByArrival(
            @PathVariable String arrival
    ) {
        return flightRepository.findByArrival(arrival);
    }
    
    @GetMapping("/Cost/{cost}")
    public Iterable<Flight> getFlightByCost(
            @PathVariable Integer cost
    ) {
        return flightRepository.findByCost(cost);
    } 
    
    @GetMapping("/Sale/{sale}")
    public Iterable<Flight> getFlightBySale(
            @PathVariable Float sale
    ) {
        return flightRepository.findBySale(sale);
    }

    @Secured({"ROLE_OPERATOR", "ROLE_ADMINISTRATOR"})
    @PostMapping("")
    public ResponseEntity<Flight> createFlight(
            @RequestBody Flight flight
    ) {
        Flight savedFlight = flightRepository.save(flight);
        return ResponseEntity.ok(savedFlight);
    }

    @Secured({"ROLE_OPERATOR", "ROLE_ADMINISTRATOR"})
    @PatchMapping("/{id}/sale/{sale}")
    public ResponseEntity<Flight> modifyFlight(
            @PathVariable Integer id,
            @PathVariable Float sale
    ) {
        Optional<Flight> oFlight = flightRepository.findById(id);
        if (oFlight.isPresent()) {
            if (sale <= 0  || sale > 1) {
                return ResponseEntity.badRequest().build();
            }
            Flight flight = oFlight.get();
            flight.setSale(sale);
            Flight savedFlight = flightRepository.save(flight);
            return ResponseEntity.ok(savedFlight);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_OPERATOR", "ROLE_ADMINISTRATOR"})
    @PatchMapping("/{id}")
    public ResponseEntity<Flight> modifyFlight(
            @PathVariable Integer id,
            @RequestBody Flight flight
    ) {
        Optional<Flight> oFlight = flightRepository.findById(id);
        if (oFlight.isPresent()) {
            if (flight.getStartpoint() == null || flight.getEndpoint() == null ) {
                return ResponseEntity.badRequest().build();
            }
            Flight oldFlight = oFlight.get();
            
            oldFlight.setStartpoint(flight.getStartpoint());
            oldFlight.setEndpoint(flight.getEndpoint());
            oldFlight.setLaunch(flight.getLaunch());
            oldFlight.setArrival(flight.getArrival());
            oldFlight.setCost(flight.getCost());
            oldFlight.setSale(flight.getSale());
                    
            Flight savedFlight = flightRepository.save(oldFlight);


            return ResponseEntity.ok(savedFlight);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_OPERATOR"})
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