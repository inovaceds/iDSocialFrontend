import React, { Component } from "react";
import { connect } from "react-redux";
import { createSuscriber } from "../../actions/suscribers.actions";
import "./NewSuscriber.css";

class NewSuscriber extends Component {
  state = {
    email: "",
    date: new Date(),
    loading: false,
    error: false
  };

  emailSuscriber = e => {
    this.setState({ email: e.target.value });
  };

  newSuscriber = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { email, date } = this.state;
    const suscriber = {
      email,
      date
    };
    this.props.createSuscriber(suscriber).then(function(response) {
      console.log(response);
      this.setState({ loading: false });
    }).catch(error =>{
      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <div className="containerForm">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            {this.state.loading && (
              <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            )}

            {!this.state.loading && (
              <div className="text-center">
                <img
                  className="imgLogo"
                  src={require("../../assets/logo.png")}
                />
                <br />
                <br />
                <span className="subtitle">
                  ¡Atrévete a ser de las primeras personas en probarla!
                </span>
                <br />
                <br />
                <input
                  onChange={this.emailSuscriber}
                  type="text"
                  className="form-control inputSuscriber"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Correo electrónico"
                />
                <br />
                <button
                  onClick={this.newSuscriber}
                  type="button"
                  className="btn btn-green"
                >
                  SUSCRIBIRME
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createSuscriber }
)(NewSuscriber);
