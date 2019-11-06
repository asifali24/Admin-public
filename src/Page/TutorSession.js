import React, { Component } from "react";
import TutorHeader from "../Component/TutorHeader";
import ButtonGroup from "../Component/ButtonsGroup";

export default class TutorSession extends Component {
  render() {
    const tutorSession = [
      {
        id: "01",
        student: "kevin",
        location: "New york",
        date: "02/05/2019",
        amount: "$55",
        duration: "65",
        status: "Active"
      },
      {
        id: "02",
        student: "Henry",
        location: "New york",
        date: "02/05/2019",
        amount: "$55",
        duration: "65",
        status: "Active"
      },
      {
        id: "03",
        student: "kevin",
        location: "New york",
        date: "02/05/2019",
        amount: "$55",
        duration: "65",
        status: "Active"
      }
    ];
    const tutorSessionList = tutorSession.map(tut => (
      <tr>
        <td>{tut.id}</td>
        <td>{tut.student}</td>
        <td>{tut.location}</td>
        <td>{tut.date}</td>
        <td>{tut.amount}</td>
        <td>{tut.duration}</td>
        <td>{tut.status}</td>
        <td>
          <div>
            <button
              type="button"
              className="btn btn-danger"
              style={{ borderRadius: "15px" }}
            >
              Edit
            </button>
            <button type="button" className="btn ">
              Deactivate
            </button>
          </div>
        </td>
      </tr>
    ));
    return (
      <div>
        <TutorHeader />
        <ButtonGroup />
        <div className="tableContener">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Student</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Amount(s)</th>
                <th scope="col">Duration(hr)</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{tutorSessionList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
