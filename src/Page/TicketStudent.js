import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import TicketButton from "../Component/TicketButton";

export default class TicketStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ticket Students"
    };
  }
  render() {
    const ticket = [
      {
        id: "01",
        date: "06/07/2019",
        title: "i want to delete the session",
        Description:
          "	huijokpoiju byuhijokpoiju byuhjiokpopijh bjijoibh iuuhijoiiojuh dfjo noinkefdgbdd uhijokpiju biiuhijokp[oij buhijkp[oji huijokpoiju byuhijokpoiju byuhjiokpopijhdxfgyhujikhgf trftgyuiuygtf rftyuiouygf xfgiukygf xfguiyftccyguhiyyt xrfgyuuxtygfcr6tyyj gtdsxdcfygvyubytcyrtxezteSzdxtcfy crvytcftucgvuicyrr crtyfytrtcfgv8rcgfiyg rtfyyfftfyfyctiufyiglutixyrfcguygi;yutiyrxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xexturdytfuttttt rdyf"
      },
      {
        id: "02",
        date: "06/07/2019",
        title: "i want to change the timing",
        Description:
          "	huijokpoiju byuhijokpoiju byuhjiokpopijh bjijoibh iuuhijoiiojuh dfjo noinkefdgbdd uhijokpiju biiuhijokp[oij buhijkp[oji huijokpoiju byuhijokpoiju byuhjiokpopijh xrfgyuuxtygfcr6tyyj gtdsxdcfygvyubytcyrtxezteSzdxtcfy crvytcftucgvuicyrr crtyfytrtcfgv8rcgfiyg rtfyyfftfyfyctiufyiglutixyrfcguygi;yutiyrxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xexturdytfuttttt rdyf"
      },
      {
        id: "03",
        date: "06/07/2019",
        title: "i want to delete the session",
        Description:
          "rvytcftucgvuicyrr crtyfytrtcfgv8rcgfiyg rtfyyfftfyfyctiufyiglutixyrfcguygi; xexturdytfuttttt rdyf"
      },
      {
        id: "04",
        date: "06/07/2019",
        title: "i want to  the sessdeleteion",
        Description:
          "dxfgyhujikhgf trftgyuiuygtf rftyuiouygf xfgiukygf xfguiyftccyguhiyyt xrfgyuuxtygfcr6tyyj gtdsxdcfygvyubytcyrtxezteSzdxtcfy crvytcftucgvuicyrr crtyfytrtcfgv8rcgfiyg rtfyyfftfyfyctiufyiglutixyrfcguygi;yutiyrxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xexturdytfuttttt rdyf"
      }
    ];
    const ticketList = ticket.map(tickets => (
      <tr>
        <td>{tickets.id}</td>
        <td>{tickets.date}</td>
        <td>{tickets.title}</td>
        <td style={{ width: "500px" }}>{tickets.Description}</td>
        <td className="row" style={{ width: "400px" }}>
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: "150px" }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn"
            style={{
              backgroundColor: "lightgrey",
              width: "150px",
              marginLeft: "2%"
            }}
          >
            Delete
          </button>
        </td>
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

            <div>
              <TicketButton />
            </div>
            <div className="tableContener">
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{ticketList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
