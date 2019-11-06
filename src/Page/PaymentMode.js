import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class PaymentMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Payment Mode"
    };
  }
  render() {
    const mode = [
      {
        sl: "01",
        mode: "Paypal"
      },
      {
        sl: "02",
        mode: "Payatm"
      }
    ];
    const modeList = mode.map(mode => (
      <tr style={{ textAlign: "center" }}>
        <td>{mode.sl}</td>
        <td>{mode.mode}</td>
      </tr>
    ));
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-2 col-lg-2 col-md-12 col-12 Left PaddingZero">
            <LeftSide />
          </div>
          <div
            className="col-sm-12  col-xl-10 col-lg-10 col-md-12 col-12 PaddingZero Right"
            style={{
              paddingRight: "0",
              paddingLeft: "0"
            }}
          >
            <Header title={this.state.title} />
            <ul className="breadcrumb">
              <li>
                <a href="/master">Master</a>
              </li>
              <li>Payment Mode</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/master/PaymentMode/AddPaymentMode">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add Mode
                </button>
              </NavLink>
            </div>
            <div>
              <div className="tableContener">
                <table class="table">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th scope="col">Sl.no</th>
                      <th scope="col">Payment Mode</th>
                    </tr>
                  </thead>
                  <tbody>{modeList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
