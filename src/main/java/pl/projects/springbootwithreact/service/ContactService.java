package pl.projects.springbootwithreact.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import pl.projects.springbootwithreact.adapter.ContactRepository;
import pl.projects.springbootwithreact.model.Contact;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;
import java.util.function.BiFunction;
import java.util.function.Function;

@Service
public class ContactService {

    public static final String PATH_DIRECTORY = System.getProperty("user.home") + "/Downloads/uploads/";

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

    public String uploadPhoto(String id, MultipartFile photo) {
        return savePhoto.apply(id, photo);
    }


    public static Function<String, String> extractFileExtension = (filename) ->
            Optional.of(filename).filter(name -> name.contains("."))
                    .map(name -> name.substring(name.lastIndexOf(".")))
                    .orElse(".jpg");

    public static BiFunction<String, MultipartFile, String> savePhoto = (id, photo) -> {
        String filename = id + extractFileExtension.apply(photo.getOriginalFilename());
        try {
            Path pathFile = Paths.get(PATH_DIRECTORY).toAbsolutePath().normalize();
            if (!Files.exists(pathFile)) {
                Files.createDirectories(pathFile);
            }
            Files.copy(photo.getInputStream(), pathFile.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
            return ServletUriComponentsBuilder.fromCurrentContextPath().path("/contacts/image/" + filename).toUriString();
        } catch (Exception e) {
            throw new RuntimeException("The file cannot be saved");
        }
    };

}
