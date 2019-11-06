import React, { Component } from "react";
import TutorHeader from "../Component/TutorHeader";
import ButtonGroup from "../Component/ButtonsGroup";
import "../App.css";

export default class TutorTicket extends Component {
  render() {
    return (
      <div>
        <TutorHeader />
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
            <tbody>
              <tr>
                <td>01</td>
                <td>06/07/2019</td>
                <td>$40</td>
                <td>Processed</td>
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
              <tr>
                <td>01</td>
                <td>06/07/2019</td>
                <td>$40</td>
                <td>Processed</td>
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
              <tr>
                <td>01</td>
                <td>06/07/2019</td>
                <td>$40</td>
                <td>Processed</td>
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
              <tr>
                <td>01</td>
                <td>06/07/2019</td>
                <td>$40</td>
                <td>Fail</td>
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
              <tr>
                <td>01</td>
                <td>06/07/2019</td>
                <td>$40</td>
                <td>Processed</td>
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
              <tr>
                <td>01</td>
                <td>06/07/2019</td>
                <td>$40</td>
                <td>Processed</td>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
