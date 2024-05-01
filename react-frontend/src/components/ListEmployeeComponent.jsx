import React, { Component } from 'react'
import BookService from '../services/BookService'

class ListBookComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
            books: []

    }
    this.addtitle = this.addtitle.bind(this);
    this.addAuthor = this.addAuthor.bind(this);
    this.addISBN = this.addISBN.bind(this);
    this.addGenre = this.addGenre.bind(this);
    this.addYear = this.addYear.bind(this);
   
  }

  deleteBook(id){
    BookService.deleteBook(id). then(res => {
        this.setState({books: this.state.books.filter(book => book.id !== id)});
    });
  }

  ViewBook(id){
    this.props.history.push(`/view-book/${id}`);
  }


  editBook(id){
    this.props.history.push(`/update-book/${id}`);

  }

    componentDidMount(){
        BookService.getBooks().then((res) => {
            this.setState({ Books: res.data});

        });
    }


    addBook(){
        this.props.history.push('/add-book/-1');

    }

  render() {
    return (
        <div>

            <h2 className='text-center'>Employee List</h2>
            <div className='rew'>
                <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
            </div>
            <br>
            </br>
            <div className='row'>
                <table className='table table-striped table-bordered'>

                    <thead>
                        <tr>
                            <th>Book Title</th>
                           <th>Book Author</th>
                          <th>Book ISBN</th>
                          <th>Book Genre</th>
                          <th>Book Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                <tr key= { book.id }>
                                    <td> { book.Title } </td>
                                    <td> { book.Author } </td>
                                    <td> { book.ISBN } </td>
                                   <td> { book.Genre } </td>
                                   <td> { book.Year } </td>
                                  
                                    <td>
                                        <button onClick ={ () => this.editBOOK(Book.id)} className='btn btn-info'>Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBook(book.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewbook(book.id)} className="btn btn-success">View </button>

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
  }
}

export default ListEmployeeComponent
