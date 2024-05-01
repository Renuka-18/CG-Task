
import React, { Component } from 'react';
import BookService from '../services/BookService';

class CreateBook extends Component {

    constructor(props){
        super(props) 
            this.state={
                title:'',
                Author:'',
                ISBN:'',
                Genre:'',
                Year:''
            }

            this.changettitleHandler = this.changettitleHandler.bind(this);
            this.changetAuthorHandler = this.changetAuthorHandler.bind(this);
            this.changetISBNHandler = this.changetISBNHandler.bind(this);
            this.changetGenreHandler = this.changetGenreHandler.bind(this);
            this.changeYearHandler = this.changeYearHandler.bind(this);
            this.saveBook = this.saveBook.bind(this);
    }

    saveBook = (e) => {
        e.preventDefault();
        let book = {title: this.state.title, Author: this.state.Author, ISBN: this.state.ISBN,Genre: this.state.Genre,Year: this.state.Year};
        console.log('book =>' +JSON.stringify(book));
        
        BookService.createBook(book).then(res => {
            this.props.history.push('books');
        });
    }

    changetitleHandler =(event) => {
        this.setState({title: event.target.value});
    }

   changeauthorHandler =(event) => {
        this.setState({author: event.target.value});
    }
    changeisbnHandler =(event) => {
            this.setState({isbn: event.target.value});
        }
    changegenreHandler =(event) => {
            this.setState({genre: event.target.value});
        }
    changetearHandler =(event) => {
            this.setState({year: event.target.value});
        }


    cancel(){
        this.props.history.push('/books');
    }
    
    render() {
        return (
            <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='card col-md-6 offset-md-3 offset-md-3'>
                                <h3 className='text-center'>Add book</h3>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label>Book Title:</label>
                                            <input placeholder='Title' name='title' className='form-control'
                                                value={this.state.title} onChange={this.changetitleHandler}/>
                                        </div>
                                        <br></br>
                                        <div className='form-group'>
                                            <label>Book Author:</label>
                                            <input placeholder='Author' name='author' className='form-control'
                                                value={this.state.author} onChange={this.changeauthorHandler}/>
                                        </div>
                                        <br></br>
                                       <div className='form-group'>
                                            <label>Book ISBN:</label>
                                            <input placeholder='ISBN' name='ISBN' className='form-control'
                                                value={this.state.isbn} onChange={this.changeisbnHandler}/>
                                        </div>
                                        <br></br>
                                         <div className='form-group'>
                                            <label>Book Genre:</label>
                                            <input placeholder='Genre' name='Genre' className='form-control'
                                                value={this.state.genre} onChange={this.changegenreHandler}/>
                                        </div>
                                        <br>
                                        </br>
                                         <div className='form-group'>
                                            <label>Book Year:</label>
                                            <input placeholder='Year' name='Year' className='form-control'
                                                value={this.state.Year} onChange={this.changeyearHandler}/>
                                        </div>
                                        <button className='btn btn-success' onClick={this.saveBook}>Save</button>
                                        
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        );
    }
}

export default CreateEmployee
