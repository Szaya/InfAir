package hu.elte.InfAir.controller;

import hu.elte.InfAir.model.Flight;
import hu.elte.InfAir.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}

