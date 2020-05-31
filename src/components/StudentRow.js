import React, { Component } from "react";
export default class StudentRow extends Component {
  render() {
    const { student, onChangeMarks } = this.props;
    return (
      <tr>
        <td>{student.name}</td>
        <td>{student.class}</td>
        <td>{student.section}</td>
        <td>{student.roll}</td>
        <td className="input-row">
          <input
            min={0}
            max={100}
            type="number"
            onChange={(event) =>
              onChangeMarks(event.target.value.trim(), this.props.student.roll)
            }
            value={
              student.marks === "" ? student.marks : parseInt(student.marks)
            }
          />
        </td>
        <td className={student.status}>{student.status}</td>
      </tr>
    );
  }
}
