import React, { Component } from "react";
import ceo from "../assets/ceo.jpg";
export default class Card extends Component {
  state = { show: false };
  onClick = () => {
    this.setState((currState) => ({ show: !currState.show }));
  };
  render() {
    const { name, designation, email, description, mb } = this.props.person;
    return (
      <div class="card">
        <img src={ceo} className="card-img" alt="image not found"></img>
        <div className="card-content">
          <h2>{name}</h2>
          <p class="title">{designation}</p>
          <p>{description}</p>
          <p>
            <button
              class="card-button"
              onClick={() => {
                this.onClick();
              }}
            >
              {this.state.show === false
                ? "Show-Contact-Details"
                : "Hide-Contact-Details"}
            </button>
          </p>
          {this.state.show && (
            <div className="contact-info">
              <div className="contact-info-d">Mobile No. :{mb}</div>
              <div className="contact-info-d">email:{email}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
