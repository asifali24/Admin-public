import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Home from "./Page/Home";
import Session from "./Page/Session";
import Tutors from "./Page/Tutors";
import School from "./Page/School";
import SchoolAdd from "./Page/SchoolAdd";
import TicketAdd from "./Page/TicketAdd";
import Ticket from "./Page/Ticket";
import Subject from "./Page/Subject";
import Student from "./Page/Student";
import AddSubject from "./Page/AddSubjects";
import StudentSession from "./Page/StudentSession";
import StudentPayment from "./Page/StudentPayment";

import Error from "./Page/Error";
import TutorProfile from "./Page/TutorProfile";
import TutorSession from "./Page/TutorSession";
import TutorTicket from "./Page/TutorTicket";
import TutorPayment from "./Page/TutorPayment";
import TicketStudent from "./Page/TicketStudent";
import StudentHeader from "./Page/StudentProfile";
import StudentSessionDetails from "./Page/StudentSessionDetails";
import Master from "./Page/Master";
import Gender from "./Page/Gender";
import SupportTicketType from "./Page/SupportTicketType";
import SupportTIcketStatus from "./Page/SupportTIcketStatus";
import PreferredLocationCategory from "./Page/PreferredLocationCategory";
import Subscription from "./Page/Subscription";
import SubscriptionOffer from "./Page/SubscriptionOffer";
import PriceBucket from "./Page/PriceBucket";
import PaymentMode from "./Page/PaymentMode";
import UserROle from "./Page/UserRole";
import ProfileStatus from "./Page/ProfileStatus";
import Apps from "./Page/Apps";
import TutorTypes from "./Page/TutorTypes";
import Legale from "./Page/Legale";
import Platform from "./Page/Platform";
import TutorSessionMaster from "./Page/TutorSessionMaster";
import AddGender from "./Page/AddGender";
import AddSupportTicketType from "./Page/AddSupportTicketType";
import AddSupportTIcketStatus from "./Page/AddSupportTicketStatus";
import AddLocationCategory from "./Page/AddLocationCategory";
import AppPriceBucket from "./Page/AddPriceBucket";
import AddPaymentMode from "./Page/AddPaymentMode";
import AddUserRole from "./Page/AddUserRole";
import AddProfileStatus from "./Page/AddProfileStatus";
import AddApps from "./Page/AddApps";
import AddTutorTyper from "./Page/AddTutorTypes";
import AddLegale from "./Page/AddLegale";
import AddPlatform from "./Page/AddPlatform";
import AddTutorSessionMaster from "./Page/AddTutorSessionMaster";
import addAdmin from "./Page/addAdmin";

import { Provider } from "react-redux";
import { store } from "./Redux/helper/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/master/Gender" component={Gender} />
          <Route exact path="/master/Gender/add" component={AddGender} />
          <Route exact path="/Subscription" component={Subscription} />
          <Route
            exact
            path="/SubscriptionOffer"
            component={SubscriptionOffer}
          />
          <Route exact path="/master/PriceBucket" component={PriceBucket} />
          <Route
            exact
            path="/master/PriceBucket/AppPriceBucket"
            component={AppPriceBucket}
          />
          <Route exact path="/master/PaymentMode" component={PaymentMode} />
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
          <Route exact path="/master/ProfileStatus" component={ProfileStatus} />
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

          <Route exact path="/master/Legale/AddLegale" component={AddLegale} />
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
          <Route exact path="/dashboard" component={Dashboard} />
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
          <Route exact path="/student/Profile" component={StudentHeader} />
          <Route exact path="/tutorProfile" component={TutorProfile} />
          <Route exact path="/tutorSession" component={TutorSession} />
          <Route exact path="/tutors/tutor-ticket" component={TutorTicket} />
          <Route exact path="/tutors/tutor-payment" component={TutorPayment} />
          <Route exact path="/ticket/Student" component={TicketStudent} />
          <Route
            exact
            path="/StudentSessionDetails"
            component={StudentSessionDetails}
          />
          <Route exact path="/master/admin" component={addAdmin} />

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
