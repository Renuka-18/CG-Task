import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name:<b>{ this.state.employee.firstName }</b> </label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Employee Last Name:  <b>{ this.state.employee.lastName }</b> </label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Employee Email ID: <b>{ this.state.employee.emailId }</b> </label>  
                           
                        </div>
                    </div>
                    <button className='btn btn-danger' style={{width:"100px", height:"50px",marginLeft:"250px"}} onClick={this.cancel.bind(this)} >Cancel</button>
<br></br>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
