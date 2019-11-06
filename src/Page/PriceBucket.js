import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class PriceBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Price Bucket"
    };
  }
  render() {
    const bucket = [
      {
        name: "abcd",
        min: "$18",
        max: "$50"
      },
      {
        name: "Efgh",
        min: "$18",
        max: "$50"
      }
    ];
    const bucketList = bucket.map(bucket => (
      <tr style={{ textAlign: "center" }}>
        <td>{bucket.name}</td>
        <td>{bucket.max}</td>
        <td>{bucket.max}</td>
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
              <li>Price Bucket</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/master/PriceBucket/AppPriceBucket">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add bucket
                </button>
              </NavLink>
            </div>
            <div>
              <div className="tableContener">
                <table class="table">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th scope="col">Name</th>
                      <th scope="col">Max Price</th>
                      <th scope="col">Min Price</th>
                    </tr>
                  </thead>
                  <tbody>{bucketList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
