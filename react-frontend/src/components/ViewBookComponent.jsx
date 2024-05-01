import React, { Component } from 'react'
import BookService from '../services/BookService'

class ViewBookeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then( res => {
            this.setState({book: res.data});
        })
    }

    cancel(){
        this.props.history.push('/books');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> BookTitle:<b>{ this.state.book.title }</b> </label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Book Author:  <b>{ this.state.book.Author }</b> </label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Book ISBN: <b>{ this.state.book.isbn }</b> </label>  
                           
                        </div>
                        <br>
                        </br>
                         <div className = "row">
                            <label> Book Genre:<b>{ this.state.book.genre }</b> </label>
                            
                        </div>
                        <br></br>
                         <div className = "row">
                            <label> Book Year:<b>{ this.state.book.Year }</b> </label>
                            
                        </div>
                    </div>
                    <button className='btn btn-danger' style={{width:"100px", height:"50px",marginLeft:"250px"}} onClick={this.cancel.bind(this)} >Cancel</button>
<br></br>
                </div>
            </div>
        )
    }
}

export default ViewBookComponent
