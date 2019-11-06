import React, { Component } from "react";
import SessioHeader from "../Component/SessionHeader";

export default class StudentSessionDetails extends Component {
  render() {
    const SessionDetais = [
      {
        Location: "2745565544-77148178477",
        Subjects: [
          { id: "01", subject: "Physic" },
          { id: "02", subject: "Maths" },
          { id: "03", subject: "English" }
        ],
        requested: "6224244545254",
        requestedOn: "685454225425",
        acceptedOn: "5224245",
        completedOn: "54514514514",
        cardNo: "5515151xxxx15114",
        paymentinitiated: "84684262282828829",
        status: "active",
        amount: "$97",
        duration: "4hr",
        currentStatus: "51145145445514"
      }
    ];
    const SubjectDetaisList = SessionDetais.map(SessionDetai =>
      SessionDetai.Subjects.map(preferredSubject => (
        <div
          style={{
            float: "left",
            fontSize: "25px",
            paddingRight: "2%",
            color: "grey"
          }}
        >
          {preferredSubject.subject}
        </div>
      ))
    );
    return (
      <div>
        <SessioHeader />
        <div className="StusentSessionHeader">Location</div>
        <div className="StusentSessionHeaderDetails" style={{ color: "grey" }}>
          {SessionDetais.map(sess => sess.Location)}
        </div>
        <div className="StusentSessionHeader">Subjects</div>
        <div className="StusentSessionHeaderDetails">
          {SubjectDetaisList}
          {/* <div
            style={{
              float: "left",
              fontSize: "25px",
              paddingRight: "1%",
              color: "grey"
            }}
          >
            english
          </div>
          <div
            style={{
              float: "left",
              fontSize: "25px",
              paddingRight: "1%",
              color: "grey"
            }}
          >
            english
          </div> */}
        </div>
        <div className="StusentSessionHeader" style={{ paddingTop: "3%" }}>
          Curent Status
        </div>
        <div className="StusentSessionHeaderDetails">
          <div style={{ float: "left", marginRight: "80px" }}>Requested</div>
          <div
            style={{
              color: "grey"
            }}
          >
            {SessionDetais.map(sess => sess.currentStatus)}
          </div>
        </div>
        <div className="StusentSessionHeader">Status</div>
        <div className="StusentSessionHeaderDetails">
          <div>
            <div className="StusentSessionHeaderDetails2">
              <div>Requested</div>
              <div style={{ color: "grey" }}>
                {SessionDetais.map(sess => sess.requestedOn)}
              </div>
            </div>
            <div className="StusentSessionHeaderDetails2">
              <div>Accepted</div>
              <div style={{ color: "grey" }}>
                {SessionDetais.map(sess => sess.acceptedOn)}
              </div>
            </div>
            <div className="StusentSessionHeaderDetails2">
              <div>Completed</div>
              <div style={{ color: "grey" }}>
                {SessionDetais.map(sess => sess.completedOn)}
              </div>
            </div>
          </div>
        </div>
        <div className="StusentSessionHeader" style={{ float: "inline-start" }}>
          Payment
        </div>
        <div className="StusentSessionHeaderDetails">
          <div className="StusentSessionHeaderDetails3">
            <div>Card</div>
            <div style={{ color: "grey" }}>
              {SessionDetais.map(sess => sess.cardNo)}
            </div>
          </div>
          <div className="StusentSessionHeaderDetails3">
            <div>Payment initiated</div>
            <div style={{ color: "grey" }}>
              {SessionDetais.map(sess => sess.paymentinitiated)}
            </div>
          </div>
          <div className="StusentSessionHeaderDetails3">
            <div>Status</div>
            <div style={{ color: "grey" }}>
              {SessionDetais.map(sess => sess.status)}
            </div>
          </div>
          <div className="StusentSessionHeaderDetails3">
            <div>Amount</div>
            <div style={{ color: "grey" }}>
              {SessionDetais.map(sess => sess.amount)}
            </div>
          </div>
          <div className="StusentSessionHeaderDetails3">
            <div>Duration</div>
            <div style={{ color: "grey" }}>
              {SessionDetais.map(sess => sess.duration)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
