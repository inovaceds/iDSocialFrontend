import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createSuscriber} from '../../actions/suscribers.actions'

class NewSuscriber extends Component {
    state = {
        email: '',
        date: new Date(),
        error: false
    }

    emailSuscriber = (e) => {
        this.setState({email: e.target.value})
    }

    newSuscriber = (e) => {
        e.preventDefault();
        const {email, date} = this.state
        const suscriber = {
            email,
            date
        }
        this.props.createSuscriber(suscriber).then(function(response) {
            console.log(response);
          });

    }
    
    render() {
        return (
            <div>
                <h1>Nuevo suscriptor</h1>
                <div className="form-group">
                  <input onChange={this.emailSuscriber} type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                </div>
                <button onClick={this.newSuscriber} type="button" className="btn btn-outline-primary">SUSCRIBIRME</button>
            </div>
        );
    }
}

export default connect(null, {createSuscriber}) (NewSuscriber);