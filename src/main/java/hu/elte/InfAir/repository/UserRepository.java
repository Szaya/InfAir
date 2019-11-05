package hu.elte.InfAir.repository;

import hu.elte.InfAir.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findById(Integer id);
    Optional<User> findByUsername(String username);
    Iterable<User> findAll();
    Iterable<User> findByName(String name);
    Iterable<User> findByRole(User.Role role);
}
