import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Session from "./Session";
import Tutors from "./Tutors";
import School from "./School";
import SchoolAdd from "./SchoolAdd";
import TicketAdd from "./TicketAdd";
import Ticket from "./Ticket";
import Subject from "./Subject";
import Student from "./Student";
import AddSubject from "./AddSubjects";
import StudentSession from "./StudentSession";
import StudentPayment from "./StudentPayment";
import Error from "./Error";
import TutorProfile from "./TutorProfile";
import TutorSession from "./TutorSession";
import TutorTicket from "./TutorTicket";
import TutorPayment from "./TutorPayment";
import TicketStudent from "./TicketStudent";
import StudentHeader from "./StudentProfile";
import StudentSessionDetails from "./StudentSessionDetails";
import Master from "./Master";
import Gender from "./Gender";
import SupportTicketType from "./SupportTicketType";
import SupportTIcketStatus from "./SupportTIcketStatus";
import PreferredLocationCategory from "./PreferredLocationCategory";
import Subscription from "./Subscription";
import SubscriptionOffer from "./SubscriptionOffer";
import PriceBucket from "./PriceBucket";
import PaymentMode from "./PaymentMode";
import UserROle from "./UserRole";
import ProfileStatus from "./ProfileStatus";
import Apps from "./Apps";
import TutorTypes from "./TutorTypes";
import Legale from "./Legale";
import Platform from "./Platform";
import TutorSessionMaster from "./TutorSessionMaster";
import AddGender from "./AddGender";
import AddSupportTicketType from "./AddSupportTicketType";
import AddSupportTIcketStatus from "./AddSupportTicketStatus";
import AddLocationCategory from "./AddLocationCategory";
import AppPriceBucket from "./AddPriceBucket";
import AddPaymentMode from "./AddPaymentMode";
import AddUserRole from "./AddUserRole";
import AddProfileStatus from "./AddProfileStatus";
import AddApps from "./AddApps";
import AddTutorTyper from "./AddTutorTypes";
import AddLegale from "./AddLegale";
import AddPlatform from "./AddPlatform";
import AddTutorSessionMaster from "./AddTutorSessionMaster";

import { Provider } from "react-redux";
import { store } from "../Redux/helper/store";

import React, { Component } from "react";

export default class Routes extends Component {
  render() {
    return (
      <div>
        if()
        {
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/master/Gender" component={Gender} />
                <Route exact path="/master/Gender/add" component={AddGender} />
                <Route exact path="/Subscription" component={Subscription} />
                <Route
                  exact
                  path="/SubscriptionOffer"
                  component={SubscriptionOffer}
                />
                <Route
                  exact
                  path="/master/PriceBucket"
                  component={PriceBucket}
                />
                <Route
                  exact
                  path="/master/PriceBucket/AppPriceBucket"
                  component={AppPriceBucket}
                />
                <Route
                  exact
                  path="/master/PaymentMode"
                  component={PaymentMode}
                />
                <Route
                  exact
                  path="/master/PaymentMode/AddPaymentMode"
                  component={AddPaymentMode}
                />

                <Route exact path="/master/UserROle" component={UserROle} />
                <Route
                  exact
                  path="/master/UserROle/AddUserRole"
                  component={AddUserRole}
                />
                <Route
                  exact
                  path="/master/ProfileStatus"
                  component={ProfileStatus}
                />
                <Route
                  exact
                  path="/master/ProfileStatus/AddProfileStatus"
                  component={AddProfileStatus}
                />
                <Route exact path="/master/Apps" component={Apps} />
                <Route exact path="/master/Apps/AddApps" component={AddApps} />
                <Route exact path="/master/TutorTypes" component={TutorTypes} />
                <Route
                  exact
                  path="/master/TutorTypes/AddTutorTyper"
                  component={AddTutorTyper}
                />
                <Route exact path="/master/Legale" component={Legale} />

                <Route
                  exact
                  path="/master/Legale/AddLegale"
                  component={AddLegale}
                />
                <Route exact path="/master/Platform" component={Platform} />
                <Route
                  exact
                  path="/master/Platform/AddPlatform"
                  component={AddPlatform}
                />
                <Route
                  exact
                  path="/master/TutorSessionMaster/AddTutorSessionMaster"
                  component={AddTutorSessionMaster}
                />
                <Route
                  exact
                  path="/master/TutorSessionMaster"
                  component={TutorSessionMaster}
                />
                <Route
                  exact
                  path="/master/supporttickettype"
                  component={SupportTicketType}
                />
                <Route
                  exact
                  path="/master/supporttickettype/AddSupportTicketType"
                  component={AddSupportTicketType}
                />
                <Route
                  exact
                  path="/master/SupportTIcketStatus/AddSupportTIcketStatus"
                  component={AddSupportTIcketStatus}
                />
                <Route
                  exact
                  path="/master/SupportTIcketStatus"
                  component={SupportTIcketStatus}
                />
                <Route
                  exact
                  path="/master/PreferredLocationCategory"
                  component={PreferredLocationCategory}
                />
                <Route
                  exact
                  path="/master/PreferredLocationCategory/AddLocationCategory"
                  component={AddLocationCategory}
                />

                <Route exact path="/session" component={Session} />
                <Route exact path="/tutors" component={Tutors} />
                <Route exact path="/master" component={Master} />
                <Route exact path="/school" component={School} />
                <Route exact path="/school/Add" component={SchoolAdd} />
                <Route exact path="/ticket" component={Ticket} />
                <Route exact path="/ticket/Add" component={TicketAdd} />
                <Route exact path="/subject" component={Subject} />
                <Route exact path="/subject/add" component={AddSubject} />
                <Route
                  exact
                  path="/student/StudentSession"
                  component={StudentSession}
                />
                <Route
                  exact
                  path="/student/StudentPayment"
                  component={StudentPayment}
                />
                <Route exact path="/student" component={Student} />
                <Route
                  exact
                  path="/student/Profile"
                  component={StudentHeader}
                />
                <Route exact path="/tutorProfile" component={TutorProfile} />
                <Route exact path="/tutorSession" component={TutorSession} />
                <Route
                  exact
                  path="/tutors/tutor-ticket"
                  component={TutorTicket}
                />
                <Route
                  exact
                  path="/tutors/tutor-payment"
                  component={TutorPayment}
                />
                <Route exact path="/ticket/Student" component={TicketStudent} />
                <Route
                  exact
                  path="/StudentSessionDetails"
                  component={StudentSessionDetails}
                />
                <Route component={Error} />
              </Switch>
            </BrowserRouter>
          </Provider>
        }
      </div>
    );
  }
}
