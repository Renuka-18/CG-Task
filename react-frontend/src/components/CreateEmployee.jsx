
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

    changeLastNameHandler =(event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler =(event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }
    
    render() {
        return (
            <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='card col-md-6 offset-md-3 offset-md-3'>
                                <h3 className='text-center'>Add Employee</h3>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label>First Name:</label>
                                            <input placeholder='First Name' name='firstName' className='form-control'
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <br></br>
                                        <div className='form-group'>
                                            <label>Last Name:</label>
                                            <input placeholder='Last Name' name='lastName' className='form-control'
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <br></br>
                                        <div className='form-group'>
                                            <label>Email ID:</label>
                                            <input placeholder='Email ID' name='emailId' className='form-control'
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <br></br>
                                        <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                        
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