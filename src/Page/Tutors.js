import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import ButtonsGroup from "../Component/ButtonsGroup";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import Tutor from "../Component/Tutor";

export default class Tutors extends Component {
  constructor(props) {
    super(props);

    this.togglePopOver = this.togglePopOver.bind(this);

    this.state = {
      popoverOpen: false,
      title: "Tutors",
      color: "red"
    };
  }

  togglePopOver() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const tutors = [
      {
        id: 1,
        name: "abc",
        contactDetails: "7452169856",
        joiningDate: "09/06/2019",
        status: "Active",
        sessionTaken: 540
      },
      {
        id: 2,
        name: "abc",
        contactDetails: "5655169856",
        joiningDate: "04/06/2019",
        status: "Active",
        sessionTaken: "540"
      },
      {
        id: 3,
        name: "sedfdsbc",
        contactDetails: "74521698565558",
        joiningDate: "09/06/2019",
        status: "Active",
        sessionTaken: "540"
      },
      {
        id: 44,
        name: "ssdgsdhbgabc",
        contactDetails: "7452169856",
        joiningDate: "09/06/2019",
        status: "Active",
        sessionTaken: "540"
      }
    ];
    const tutorList = tutors.map(tutor => (
      <tr>
        <td>{tutor.id}</td>
        <td>
          <NavLink to="/tutorProfile">
            <button type="button" className="btn ">
              {tutor.name}
            </button>
          </NavLink>
        </td>
        <td>{tutor.contactDetails}</td>
        <td>{tutor.status}</td>
        <td>{tutor.joiningDate}</td>
        <td>{tutor.sessionTaken}</td>
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
        <td>
          <Button id="Popover1" type="button">
            ...
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target="Popover1"
            toggle={this.togglePopOver}
          >
            <PopoverBody>
              <div>
                <button>Send mail</button>
                <button>Send Notification</button>
              </div>
            </PopoverBody>
          </Popover>
        </td>
      </tr>
    ));
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-2 col-lg-2 col-md-12 col-12 Left PaddingZero">
            <LeftSide colors={this.state.color} />
          </div>
          <div
            className="col-sm-12  col-xl-10 col-lg-10 col-md-12 col-12 PaddingZero Right"
            style={{
              paddingRight: "0",
              paddingLeft: "0",
              width: "100%"
            }}
          >
            <Header title={this.state.title} />
            <ButtonsGroup />
            <div class="col-xl-12" style={{ paddingTop: "30px" }}>
              <table class="table" style={{ textAlign: "center" }}>
                <thead class="thead-light">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact Details</th>
                    <th>Status</th>
                    <th>Joining Date</th>
                    <th>Session Taken</th>
                    <th>Action</th>
                    <th style={{ fontSize: "25px" }}>✚</th>
                  </tr>
                </thead>
                <tbody>{tutorList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
