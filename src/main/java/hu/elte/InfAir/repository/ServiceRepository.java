package hu.elte.InfAir.repository;

import hu.elte.InfAir.model.Service;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ServiceRepository extends CrudRepository<Service, Integer> {
    Optional<Service> findById(Integer id);
    Iterable<Service> findAll();
    Iterable<Service> findBySpecialseat(Boolean specialseat);
    Iterable<Service> findByNexttowindow(Boolean nexttowindow);
    Iterable<Service> findByBiggerfootspace(Boolean biggerfootspace);
    Iterable<Service> findByExtrasuitecase(Boolean extrasuitecase);
    Iterable<Service> findByBagcar(Boolean bagcar);
}
