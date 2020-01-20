import React from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'


class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            from: "",
            to: "",
            model: "",
            types: "",
            seat: "",
            colour: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()

        var data = {
            from: this.state.from,
            to: this.state.to,
            model: this.state.model,
            types: this.state.types,
            seat: this.state.seat,
            colour: this.state.colour
        }

        this.reset()
        console.log(data)
    }

    reset = () => {
        this.setState({
            from: "",
            to: "",
            model: "",
            types: "",
            seat: "",
            colour: ""
        })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <h2><u>Book Your Car</u></h2>
                    <div>From: 
                        <TextField
                            variant="standard"
                            onChange={this.handleChange}
                            value={this.state.from}
                            type="date"
                            name="from"
                            required
                            className="m-3"
                        />
                    </div>
                    <div>To: 
                        <TextField
                            variant="standard"
                            onChange={this.handleChange}
                            value={this.state.to}
                            type="date"
                            name="to"
                            required
                            className="m-3"
                        />
                    </div>
                    <div>
                        <TextField
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.model}
                            type="text"
                            name="model"
                            required
                            className="m-3"
                            label="Model" 
                        />
                    </div>
                    <div>
                        <TextField
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.types}
                            type="text"
                            name="types"
                            required
                            className="m-3"
                            label="Type" 
                        />
                    </div>
                    <div>
                        <TextField
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.seat}
                            type="number"
                            name="seat"
                            required
                            className="m-3"
                            label="No. of Seats" 
                        />
                    </div>
                    <div>
                        <TextField
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.colour}
                            type="text"
                            name="colour"
                            required
                            className="m-3"
                            label="Colour" 
                        />
                    </div>
                    <div>
                        <button className="btn btn-outline-dark" onClick={this.handleClick}>Book</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;