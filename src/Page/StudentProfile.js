import React, { Component } from "react";
import StudentHeader from "../Component/StudentHeader";

export default class StudentProfile extends Component {
  render() {
    const studentProfiles = [
      {
        bio:
          "ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc cffghijl ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc cffghijlhjh  ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc        cffghijlhjhghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc        cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjhghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjhghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh ghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjhghjkl;kljh sacxhgjbklscjb gvhjlkjhv cghlkgnc       cffghijlhjh",
        locations: [
          { id: "01", location: "Starbucks" },
          { id: "02", location: "coffee Shop" },
          { id: "03", location: "Library" },
          { id: "04", location: "cafe" }
        ],
        subjects: [
          { id: "01", subject: "Physic" },
          { id: "02", subject: "Maths" },
          { id: "03", subject: "English" },
          { id: "04", subject: "English" }
        ]
      }
    ];
    const studentSubjectList = studentProfiles.map(studentProfile =>
      studentProfile.subjects.map(preferredSubject => (
        <div style={{ float: "left", width: "200px" }}>
          <button
            type="button"
            className="btn "
            style={{
              color: "white",
              fontSize: "20px",
              backgroundColor: "grey",
              width: "150px",
              float: "left"
            }}
          >
            {preferredSubject.subject}
          </button>
        </div>
      ))
    );
    return (
      <div>
        <StudentHeader />
        <div class="container-fluid">
          <div className="row">
            <div
              className="col-xl-12"
              style={{
                // backgroundColor: "red",
                height: "700px"
                // marginTop: "20px"
              }}
            >
              <div className="BioHeading">Bio</div>
              <div className="Bio">{studentProfiles.map(tut => tut.bio)}</div>
              <div
                style={{ paddingLeft: "2%", paddingTop: "2%", color: "grey" }}
              >
                <button
                  type="button"
                  className="btn "
                  style={{
                    color: "white",
                    fontSize: "20px",
                    backgroundColor: "grey",
                    width: "150px"
                  }}
                >
                  Intro Video
                </button>
              </div>
              <div className="PreferredLocation"> Preferred Location</div>
              <div className="PrefrButton">{studentSubjectList}</div>
              <div className="PreferredLocation"> Subjects</div>
              <div className="PrefrButton">{studentSubjectList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
