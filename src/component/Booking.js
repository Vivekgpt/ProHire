import React from 'react';
import { TextField } from '@material-ui/core'


class Booking extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            fName: "",
            lName: "",
            license: ""
        }
    }

    custmerDetailsChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addDetails = (e) => {
        e.preventDefault()

        var custData = {
            fName: this.state.fName,
            lName: this.state.lName,
            license: this.state.license
        }

        this.custReset()
        console.log(custData)
    }

    custReset = () => {
        this.setState({
            fName: "",
            lName: "",
            license: ""
        })
    }

    render(){
        return(
            <React.Fragment>
                <h2>Customer Details</h2>
                <div>
                    <TextField
                        variant="outlined"
                        onChange={this.custmerDetailsChange}
                        value={this.state.fName}
                        type="first name"
                        name="fName"
                        required
                        className="m-3"
                        label="First Name" 
                    />
                </div>
                <div>
                    <TextField
                        variant="outlined"
                        onChange={this.custmerDetailsChange}
                        value={this.state.lName}
                        type="last name"
                        name="lName"
                        required
                        className="m-3"
                        label="Last Name" 
                    />
                </div>
                <div>
                    <TextField
                        variant="outlined"
                        onChange={this.custmerDetailsChange}
                        value={this.state.license}
                        type="text"
                        name="license"
                        required
                        className="m-3"
                        label="License Details" 
                    />
                </div>
                <div>
                    <button className="btn btn-outline-dark" onClick={this.addDetails}>Add Details</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Booking;