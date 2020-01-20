import React from 'react';


class Confirmation extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    handleConfirm = (e) => {
        e.preventDefault()
    }

    render(){
        return(
            <React.Fragment>
                {/* {this.props.data.map(a => {
                    return(
                        <div>
                            <p>{a.model}</p>
                        </div>
                    )
                })} */}
                {/* {this.props.custData.map(b => {
                    return(
                        <div>
                            <p>{b.fName}</p>
                        </div>
                    )
                })} */}
                <button className="btn btn-outline-dark" onClick={this.handleConfirm}>confirm</button>
            </React.Fragment>
        )
    }
}

export default Confirmation;