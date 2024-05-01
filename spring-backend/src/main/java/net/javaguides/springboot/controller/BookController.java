package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.BookRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BookController {
	
	
	@Autowired
	private BookRepository bookRepository;
	
	
	@GetMapping("/books")
	public List<Employee> getAllBooks(){
		return bookRepository.findAll();
		
	}
	@PostMapping("/books")
	public Employee createBooks(@RequestBody Book book) {
		return bookRepository.save(book);
	}
	
	@GetMapping("/books/{id}")
	public  ResponseEntity<Book> getBookById(@PathVariable Long id) {
		
		Book book= bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book not found with this id:"+id));
		return ResponseEntity.ok(Book);
	}
	
	@PutMapping("/books/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book BookDetails){
		Book book = bookRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Book does not exist with id :" + id));
		
		employee.setTitle(BookDetails.getTitle());
		employee.setAuthor(BookDetails.getAuthor());
		employee.setGenre(BookDetails.getGenre());
		employee.setISBN(BookDetails.getISBN());
		employee.setYear(BookDetails.getYear());
		
		Employee updatedBook =bookRepository.save(book);
		return ResponseEntity.ok(updatedBook);
		}
	@DeleteMapping("/books/{id}")
	public ResponseEntity<Map<String, Boolean>> deletebook(@PathVariable Long id){
		Book book = bookRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Book does not exist with id :" + id));
		
		bookRepository.delete(book);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	

}
