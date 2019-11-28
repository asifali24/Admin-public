import { combineReducers } from "redux";
import { login } from "./login";
import { addTickets } from "./addSupportTicketType";
import { addGenders } from "./addGender";
import { addAdmins } from "./addAdmin";
import { addSubjects } from "./addSubject";
import { getStudents } from "./getStudents";
import { getTutors } from "./getTutors";
import { verifyUser } from "./verifyUser";
import { addSubscription } from "./addSubscription";
import { getPriceBucket } from "./getPriceBucket";
import { getSession } from "./getSessions";
import { getSchool } from "./getSchool";
import { getGender } from "./getGender";

const rootReducer = combineReducers({
  login,
  addTickets,
  addGenders,
  addAdmins,
  addSubjects,
  getStudents,
  getTutors,
  verifyUser,
  addSubscription,
  getPriceBucket,
  getSession,
  getSchool,
  getGender
});

export default rootReducer;
