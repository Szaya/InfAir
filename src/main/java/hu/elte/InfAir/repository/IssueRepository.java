package hu.elte.InfAir.repository;

import hu.elte.InfAir.model.Issue;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends CrudRepository<Issue, Integer> {
    Iterable<Issue> findAllByTitle(String title);
}
