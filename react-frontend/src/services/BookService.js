import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/book";


class BookService {

    getBook(){
        return axios.get(BOOK_API_BASE_URL);

    }

    createBook(book){
        return axios.post(BOOK_API_BASE_URL, book);
    }

    getBookById(bookId){
        return axios.get(BOOK_API_BASE_URL + '/' +bookId);
    }

    updatebook(book, bookId){
        return axios.put(BOOK_API_BASE_URL + '/' + bookId, book);
    }

    deletebook(bookId){
        return axios.delete(BOOK_API_BASE_URL + '/' + bookId)
    }
}

export default new BookService()