import React, { Component } from "react";
import StudentHeader from "../Component/StudentHeader";
import ButtonGroup from "../Component/ButtonsGroup";
import "../App.css";

export default class StudentPayment extends Component {
  render() {
    const studentPayments = [
      {
        id: "5478",
        date: "02/04/2019",
        amount: "$45",
        status: "Completed"
      },
      {
        id: "21478",
        date: "02/04/2019",
        amount: "$45",
        status: "Completed"
      },
      {
        id: "521478",
        date: "02/04/2019",
        amount: "$45",
        status: "Completed"
      },
      {
        id: "578",
        date: "02/04/2019",
        amount: "$45",
        status: "Completed"
      },
      {
        id: "78",
        date: "02/04/2019",
        amount: "$45",
        status: "Completed"
      }
    ];
    const studentPaymentsList = studentPayments.map(stu => (
      <tr>
        <td>{stu.id}</td>
        <td>{stu.date}</td>
        <td>{stu.amount}</td>
        <td>{stu.status}</td>
        <td>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: "lightgrey" }}
          >
            Retry
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <StudentHeader />
        <ButtonGroup />
        <div className="tableContener">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Date</th>
                <th scope="col">Amount(s)</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{studentPaymentsList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
