import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../component/Home';
import Booking from '../component/Booking';
import Confirmation from '../component/Confirmation';


class Routes extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <Route path="/" component={Home}/>
                <Route path="/book" component={Booking}/>
                <Route path="/confirm" component={Confirmation}/>
            </React.Fragment>
        )
    }
}

export default Routes;