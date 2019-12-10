package hu.elte.InfAir.controller;

import hu.elte.InfAir.model.Service;
import hu.elte.InfAir.repository.ServiceRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/services")
public class ServiceController {
    
    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("/{id}")
    public Optional<Service> getServiceById(
            @PathVariable Integer id
    ) {
        return serviceRepository.findById(id);
    }

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("")
    public Iterable<Service> getServices() {
        return serviceRepository.findAll();
    }

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("/specialseat/{specialseat}")
    public Iterable<Service> getServicesBySpecialseat(
            @PathVariable Boolean specialseat
    ) {
        return serviceRepository.findBySpecialseat(specialseat);
    }

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("/nexttowindow/{nexttowindow}")
    public Iterable<Service> getServicesByNextowindow(
            @PathVariable Boolean nexttowindow
    ) {
        return serviceRepository.findByNexttowindow(nexttowindow);
    }

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("/biggerfootspace/{biggerfootspace}")
    public Iterable<Service> getServicesByBiggerfootspace(
            @PathVariable Boolean biggerfootspace
    ) {
        return serviceRepository.findByBiggerfootspace(biggerfootspace);
    }

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("/extrasuitecase/{extrasuitecase}")
    public Iterable<Service> getServicesByExtrasuitecase(
            @PathVariable Boolean extrasuitecase
    ) {
        return serviceRepository.findByExtrasuitecase(extrasuitecase);
    }

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("/bagcar/{bagcar}")
    public Iterable<Service> getServicesByBagcar(
            @PathVariable Boolean bagcar
    ) {
        return serviceRepository.findByBagcar(bagcar);
    }
    
    @PostMapping("")
    public ResponseEntity<Service> createService(
            @RequestBody Service service
    ) {
        Service savedService = serviceRepository.save(service);
        return ResponseEntity.ok(savedService);
    }
    
    @PatchMapping("/{id}")
    public ResponseEntity<Service> modifyService(
            @PathVariable Integer id,
            @RequestBody Service service
    ) {
        Optional<Service> oService = serviceRepository.findById(id);
        if (oService.isPresent()) {
            if (service.getSpecialseat() == null && 
                service.getNexttowindow() == null && 
                service.getBiggerfootspace() == null && 
                service.getExtrasuitecase() == null && 
                service.getBagcar() == null ) {
                return ResponseEntity.badRequest().build();
            }
            Service oldService = oService.get();
            
            oldService.setSpecialseat(service.getSpecialseat());
            oldService.setNexttowindow(service.getNexttowindow());
            oldService.setBiggerfootspace(service.getBiggerfootspace());
            oldService.setExtrasuitecase(service.getExtrasuitecase());
            oldService.setBagcar(service.getBagcar());
                    
            Service savedFlight = serviceRepository.save(oldService);

            return ResponseEntity.ok(savedFlight);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity deleteService(
            @PathVariable Integer id
    ) {
        try {
            serviceRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}