import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage";
import {
  loadEntries,
  getEntries,
  addEntry,
  resetData,
  deleteEntries,
} from "./utils/helper";
import About from "./components/About";
import { aboutData } from "./utils/static_data";
export class App extends Component {
  state = {
    students: [],
    tab: "Home",
  };
  componentDidMount() {
    loadEntries().then((entries) =>
      this.setState(() => ({
        students: entries,
      }))
    );
  }
  onNavChange = (tabName) => {
    this.setState(() => ({
      tab: tabName,
    }));
  };
  onChangeMarks = (marks, roll) => {
    if (marks > 100) {
      alert("Can't input more than 100%");
      return;
    }
    this.setState((currState) => ({
      ...currState,
      students: currState.students.map((student) =>
        student.roll !== roll
          ? student
          : {
              ...student,
              marks: marks,
              status:
                marks === "" ? "None" : parseInt(marks) > 50 ? "Pass" : "Fail",
            }
      ),
    }));
  };
  addRow = (entry) => {
    console.log("entry row", entry);
    addEntry(entry)
      .then(getEntries)
      .then((entries) =>
        this.setState(() => ({
          students: entries,
        }))
      );
  };
  resetEntries = () => {
    resetData()
      .then(loadEntries)
      .then((entries) =>
        this.setState(() => ({
          students: entries,
        }))
      );
  };
  deleteEntries = () => {
    deleteEntries()
      .then(getEntries)
      .then((entries) =>
        this.setState(() => ({
          students: entries,
        }))
      );
  };
  render() {
    return (
      <div className="app">
        <div className="app-nav-container">
          <NavigationBar onNavChange={this.onNavChange} />
        </div>
        <div className="homePage-container">
          {this.state.tab === "Home" ? (
            <Homepage
              addRow={this.addRow}
              resetEntries={this.resetEntries}
              deleteEntries={this.deleteEntries}
              onChangeMarks={this.onChangeMarks}
              students={this.state.students}
            />
          ) : (
            <About aboutData={aboutData} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
