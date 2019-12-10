package hu.elte.InfAir.controller;

import hu.elte.InfAir.Security.AuthenticatedUser;
import hu.elte.InfAir.model.User;
import hu.elte.InfAir.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private AuthenticatedUser authenticatedUser;
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("")
    public ResponseEntity<User> register(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByUsername(user.getUsername());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(User.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }

    @GetMapping("login")
    public ResponseEntity<User> login() {
        return ResponseEntity.ok(authenticatedUser.getUser());
    }

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("/{id}")
    public Optional<User> getUserById(
            @PathVariable Integer id
    ) {
        return userRepository.findById(id);
    }

    @Secured({"ROLE_OPERATOR"})
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

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("/Username/{username}")
    public Optional<User> getUserByUsername(
            @PathVariable String username
    ) {
        return userRepository.findByUsername(username);
    }

    @Secured({"ROLE_OPERATOR"})
    @GetMapping("/Role/{role}")
    public Iterable<User> getUserByRole(
            @PathVariable User.Role role
    ) {
        return userRepository.findByRole(role);
    }

    @Secured({"ROLE_OPERATOR", "ROLE_USER"})
    @PatchMapping("/{id}")
    public ResponseEntity<User> modifyUser(
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

    @Secured({"ROLE_OPERATOR", "ROLE_USER"})
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
