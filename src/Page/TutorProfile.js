import React, { Component } from "react";
import TutorHeader from "../Component/TutorHeader";
import ButtonGroup from "../Component/ButtonsGroup";
import "../App.css";

export default class TutorProfile extends Component {
  render() {
    const TutorProfiles = [
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
          { id: "03", subject: "English" }
        ],
        gpa: "Julian Gruber",
        gpaType: "Weighted",
        typescript: "www.google.in",
        dlNumber: "987651489461523",
        dlCopy: "www.google.com",
        cardNo: "6865214545454",
        cardcopy: "www.google.com"
      }
    ];

    const locationsList = TutorProfiles.map(tutorProfile =>
      tutorProfile.locations.map(preferredLocation => (
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
            {preferredLocation.location}
          </button>
        </div>
      ))
    );
    const subjectList = TutorProfiles.map(tutorProfile =>
      tutorProfile.subjects.map(preferredSubject => (
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
        <TutorHeader />
        <div class="container-fluid">
          <div className="row">
            <div
              className="col-xl-12"
              style={{
                height: "700px"
              }}
            >
              <div className="BioHeading">Bio</div>
              <div className="Bio">{TutorProfiles.map(tut => tut.bio)}</div>
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
              <div className="PrefrButton" style={{ float: "left" }}>
                {locationsList}
              </div>
              <div className="PreferredLocation"> Subjects</div>
              <div className="PrefrButton">{subjectList}</div>
              <div class="container-fluid">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="Contener">
                      <div className="ContenerHeader">Education</div>
                      <div className="ContenerBody">
                        <div className="ContenerBodyDetails">
                          <div className="ContenerBodyDetailsLeft">GPA</div>
                          <div className="ContenerBodyDetailsRight">
                            {TutorProfiles.map(tut => tut.gpa)}
                          </div>
                        </div>
                        <div className="ContenerBodyDetails">
                          <div className="ContenerBodyDetailsLeft">
                            GPA-Type
                          </div>
                          <div className="ContenerBodyDetailsRight">
                            {TutorProfiles.map(tut => tut.gpaType)}
                          </div>
                        </div>
                        <div className="ContenerBodyDetails">
                          <div className="ContenerBodyDetailsLeft">
                            Typescript
                          </div>
                          <div className="ContenerBodyDetailsRight"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="Contener">
                      <div className="ContenerHeader">Driving Licence</div>
                      <div className="ContenerBody">
                        <div className="ContenerBodyDetails">
                          <div className="ContenerBodyDetailsLeft">
                            DL Number
                          </div>
                          <div className="ContenerBodyDetailsRight">
                            {TutorProfiles.map(tut => tut.dlNumber)}
                          </div>
                        </div>
                        <div className="ContenerBodyDetails">
                          <div className="ContenerBodyDetailsLeft">DL Copy</div>
                          <div className="ContenerBodyDetailsRight">
                            Weighted
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="Contener">
                      <div className="ContenerHeader">Student Card</div>
                      <div className="ContenerBody">
                        <div className="ContenerBodyDetails">
                          <div className="ContenerBodyDetailsLeft">
                            Card Number
                          </div>
                          <div className="ContenerBodyDetailsRight">
                            {TutorProfiles.map(tut => tut.cardNo)}
                          </div>
                        </div>
                        <div className="ContenerBodyDetails">
                          <div className="ContenerBodyDetailsLeft">
                            Card Copy
                          </div>
                          <div className="ContenerBodyDetailsRight">
                            Weighted
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  // backgroundColor: "yellow",
                  height: "100px",
                  width: "100%",
                  float: "left"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
