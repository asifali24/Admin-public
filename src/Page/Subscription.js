import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";
import { addSubscription, getPriceBucket } from "../Redux/actions/userActions";
import { connect } from "react-redux";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Subscription",
      sessions: null,
      duration: null,
      price: null,
      price_bucket_id: null,
      getPriceBucket: []
    };
    this.getToken();

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  getToken = async () => {
    const token = await sessionStorage.getItem("userToken");
    this.setState({ token: token });
    this.props.getPriceBucket(token);
  };
  shouldComponentRender() {
    if (this.pending === false) return false;
    return true;
  }
  AddSubscription = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };

  onHandelChange = e => {
    // console.log("***********" + this.state.school);
    e.preventDefault();
    const token = this.state.token;
    if (
      this.state.duration &&
      this.state.sessions &&
      this.state.price &&
      this.state.price_bucket_id
    ) {
      const subscription = {
        duration: this.state.duration,
        price: this.state.price,
        price_bucket_id: this.state.price_bucket_id,
        sessions: this.state.sessions
      };
      this.props.addSubscription(subscription, token);
      console.log(subscription, "/////////////////////");
    } else {
      console.log("not Aded");
    }
  };

  alertChooseValue = e => {
    this.setState({
      duration: document.getElementById("dropdownValue").value
    });
  };
  priceBucket = e => {
    this.setState({
      price_bucket_id: document.getElementById("SelectdropdownValue").value
    });
    console.log(
      document.getElementById("SelectdropdownValue").value,
      "$$$$$$$$$$$$$$$$$$$$$"
    );
  };

  render() {
    let bucketList =
      this.props.bucket.length > 0 ? (
        this.props.bucket.map(bucketList => {
          console.log(bucketList, "---------------------------------");
          return (
            <option name="Duration" value={bucketList.id}>
              {bucketList.id}
            </option>
          );
        })
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      );
    console.log(bucketList, "++++++++++++++++++++++++++++++++++++++++++++++");
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
            <div>
              <form className="row" style={{ width: "100%", marginTop: "10%" }}>
                <div className="col" style={{ paddingLeft: "20%" }}>
                  <h3>Sessions</h3>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter The Sessions"
                      name="sessions"
                      value={this.state.sessions}
                      onChange={this.AddSubscription}
                    />
                  </div>
                  <div style={{ paddingTop: "50px" }}></div>
                  <h3>Duration</h3>

                  <div
                    style={{
                      textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  >
                    <select
                      className="form-control"
                      id="dropdownValue"
                      onChange={this.alertChooseValue}
                    >
                      <option name="Duration" value="null">
                        Select
                      </option>
                      <option name="Duration" value="86400">
                        Days
                      </option>
                      <option name="Duration" value="2678400">
                        Month
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col" style={{ paddingRight: "20%" }}>
                  <h3>Price</h3>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter The price"
                      name="price"
                      value={this.state.price}
                      onChange={this.AddSubscription}
                    />
                  </div>
                  <div style={{ paddingTop: "50px" }}></div>
                  <h3>Price Bucket Id</h3>

                  <div
                    style={{
                      textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  >
                    <select
                      className="form-control"
                      id="SelectdropdownValue"
                      onChange={this.priceBucket}
                    >
                      {bucketList}
                    </select>
                  </div>

                  {/* <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter The price Id "
                      name="price_bucket_id"
                      value={this.state.price_bucket_id}
                      onChange={this.AddSubscription}
                    />
                  </div> */}
                </div>
              </form>
              <div style={{ paddingTop: "50px" }}></div>

              <div
                style={{
                  paddingTop: "50px"
                }}
                className="row"
              >
                <div style={{ width: "50%" }}>
                  <button
                    type="submit"
                    class="btn "
                    style={{
                      marginLeft: "80%",
                      borderRadius: "15px",
                      backgroundColor: "#ff0042",
                      color: "white",
                      width: "100px"
                    }}
                    onClick={this.onHandelChange}
                  >
                    Submit
                  </button>
                </div>
                <div style={{ width: "50%" }}>
                  <button
                    type="submit"
                    class="btn btn-danger"
                    style={{
                      marginLeft: "00%",
                      borderRadius: "15px",
                      backgroundColor: "white",
                      color: "#ff0042",
                      width: "100px"
                      // borderWidth: "1px solid"
                    }}
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    duration: state.duration,
    price_bucket_id: state.price_bucket_id,
    price: state.price,
    sessions: state.sessions,
    bucket: state.getPriceBucket.priceBucket
  };
};
export default connect(mapStateToProps, { addSubscription, getPriceBucket })(
  Subscription
);
