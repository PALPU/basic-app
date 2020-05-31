import React, { Component } from "react";
import StudentRow from "../components/StudentRow";
import NewEntrySheet from "../components/NewEntrySheet";
export default class Homepage extends Component {
  state = {
    newEntrySheet: false,
    buttonName: "open-EntrySheet",
  };
  changeFlag = () => {
    console.log("changing the flag");
    this.setState((currState) => ({
      newEntrySheet: !currState.newEntrySheet,
      buttonName: !currState.newEntrySheet
        ? "close-EntrySheet"
        : "open-EntrySheet",
    }));
    console.log("new state is ", this.state);
  };
  resetEntries = () => {
    this.props.resetEntries();
  };
  render() {
    const { addRow, onChangeMarks } = this.props;
    return (
      <div className="home-page">
        <table className="student-table">
          <tbody>
            <tr className="table-heading">
              <th>Name</th>
              <th>Class</th>
              <th>Section</th>
              <th>Roll No.</th>
              <th>Marks (out of 100)</th>
              <th>Status</th>
            </tr>
            {this.props.students.map((student, index) => (
              <StudentRow
                key={index}
                student={student}
                onChangeMarks={onChangeMarks}
              />
            ))}
          </tbody>
        </table>
        <div className="btns">
          <button className="btn" onClick={() => this.changeFlag()}>
            {this.state.buttonName}
          </button>
          <button className="btn" onClick={() => this.resetEntries()}>
            Reset
          </button>
          <button className="btn" onClick={() => this.props.deleteEntries()}>
            Delete All Entries
          </button>
        </div>
        {this.state.newEntrySheet && (
          <NewEntrySheet
            addEntry={(entry) => {
              addRow(entry);
              this.changeFlag();
            }}
          />
        )}
      </div>
    );
  }
}
