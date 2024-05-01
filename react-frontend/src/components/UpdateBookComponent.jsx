import React, {Component} from 'react';
import BookService from '../services/BookService';


class UpdateBookComponent extends Component {

    constructor(props){
        super(props)


        this.state={
            id: this.props.match.params.id,
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
        this.updatebook = this.updatebook.bind(this);
}

componentDidMount(){
    BookService.getBookById(this.state.id).then((res) =>{
        let book = res.data;
        this.setState({{title: this.state.title, Author: this.state.Author, ISBN: this.state.ISBN,Genre: this.state.Genre,Year: this.state.Year}
        });
    });
}

updateEmployee = (e) => {
    e.preventDefault();
    let employee = {{title: this.state.title, Author: this.state.Author, ISBN: this.state.ISBN,Genre: this.state.Genre,Year: this.state.Year}};
    console.log('book =>' +JSON.stringify(book));
    
    BookService.UpdateBook(book,this.state.id).then(res => {
        this.props.history.push('/books');
    });
}

changetitleHandler =(event) => {
    this.setState({title: event.target.value});
}
changeauthorHandler =(event) => {
    this.setState({author: event.target.value});
}
changeISBNHandler =(event) => {
    this.setState({isbn: event.target.value});
}

changeGenreHandler =(event) => {
    this.setState({genre: event.target.value});
}

changeYearHandler =(event) => {
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
                            <h3 className='text-center'>Update Book</h3>
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
                                    <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                                    
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

export default UpdateBookComponent
