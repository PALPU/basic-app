import React, { Component } from "react";
export default class NewEntrySheet extends Component {
  state = {
    name: "",
    class: "",
    section: "",
    roll: "",
    marks: "",
    status: "None",
  };
  changeValue = (value, key) => {
    console.log(value);
    this.setState((currState) => ({
      ...currState,
      [key]: value,
    }));
  };
  onSubmit = () => {
    if (
      this.state.name !== "" &&
      this.state.class !== "" &&
      this.state.class !== "" &&
      this.state.roll !== ""
    ) {
      this.props.addEntry({ ...this.state });
    } else {
      alert("Enter all the details to submit");
    }
  };
  render() {
    return (
      <>
        <table className="student-table">
          <tbody>
            <tr className="table-heading">
              <th>Name</th>
              <th>Class</th>
              <th>Section</th>
              <th>Roll No.</th>
            </tr>
            <tr>
              <td>
                <input
                  placeholder={"Enter the name of the student"}
                  onChange={(event) => {
                    this.changeValue(event.target.value.trim(), "name");
                  }}
                  value={this.state.name}
                />
              </td>
              <td>
                <input
                  placeholder={"Enter the class of the student"}
                  value={this.state.class}
                  onChange={(event) => {
                    this.changeValue(event.target.value.trim(), "class");
                  }}
                />
              </td>
              <td>
                <input
                  placeholder={"Enter the section of the student"}
                  value={this.state.section}
                  onChange={(event) => {
                    this.changeValue(event.target.value.trim(), "section");
                  }}
                />
              </td>
              <td>
                <input
                  placeholder={"Enter the roll number of the student"}
                  value={this.state.roll}
                  onChange={(event) => {
                    this.changeValue(event.target.value.trim(), "roll");
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="" type="Submit" onClick={() => this.onSubmit()}>
          Submit
        </button>
      </>
    );
  }
}
