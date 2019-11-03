package hu.elte.InfAir.repository;

import hu.elte.InfAir.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Integer> {
}
