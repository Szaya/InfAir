package hu.elte.InfAir.controller;

import hu.elte.InfAir.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public Optional<User> getUserById(
            @PathVariable Integer id
    ) {
        return userRepository.findById(id);
    }


    @GetMapping("")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/Name/{name}")
    public Iterable<User> getUserByName(
            @PathVariable String name
    ) {
        return userRepository.findByName(name);
    }

    @GetMapping("/Username/{username}")
    public Iterable<User> getUserByUsername(
            @PathVariable String username
    ) {
        return userRepository.findByUsername(username);
    }

    @GetMapping("/Role/{role}")
    public Iterable<User> getUserByRole(
            @PathVariable User.Role role
    ) {
        return userRepository.findByRole(role);
    }

    @PostMapping("")
    public ResponseEntity<User> createUser(
            @RequestBody User user
    ) {
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<User> modifyFlight(
            @PathVariable Integer id,
            @RequestBody User user
    ) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            if (user.getName() == null || user.getUsername() == null || user.getPassword() == null || user.getRole() == null) {
                return ResponseEntity.badRequest().build();
            }
            User oldUser = oUser.get();

            oldUser.setName(user.getName());
            oldUser.setUsername(user.getUsername());
            oldUser.setPassword(user.getPassword());
            oldUser.setRole(user.getRole());

            User savedUser = userRepository.save(oldUser);
            return ResponseEntity.ok(savedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(
            @PathVariable Integer id
    ) {
        try {
            userRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }




}
