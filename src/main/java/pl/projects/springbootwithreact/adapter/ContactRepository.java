package pl.projects.springbootwithreact.adapter;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.projects.springbootwithreact.model.Contact;
import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, String> {
    Page<Contact> findAllByPosition(Pageable pageable, String position);

    @Query("SELECT DISTINCT c.position from Contact c ORDER BY c.position")
    List<String> findAllDistinctPositions();
}