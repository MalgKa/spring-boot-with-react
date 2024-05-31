package pl.projects.springbootwithreact.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import pl.projects.springbootwithreact.adapter.ContactRepository;
import pl.projects.springbootwithreact.model.Contact;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Page<Contact> getAllContacts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return contactRepository.findAll(pageable);
    }
    public Contact getContact(String id) {
        return contactRepository.findById(id).orElse(null);
    }

    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }
}
