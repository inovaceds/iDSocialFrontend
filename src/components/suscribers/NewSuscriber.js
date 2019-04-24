import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createSuscriber} from '../../actions/suscribers.actions'

class NewSuscriber extends Component {
    render() {
        return (
            <div>
                <h1>Nuevo suscriptor</h1>
            </div>
        );
    }
}

export default connect(null, {createSuscriber}) (NewSuscriber);