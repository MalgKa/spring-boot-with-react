package pl.projects.springbootwithreact.adapter;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.projects.springbootwithreact.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, String> {
    Page<Contact> findAllByPosition(Pageable pageable, String position);
}