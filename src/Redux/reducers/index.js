import { combineReducers } from "redux";
import { login } from "./login";
import { addTickets } from "./addSupportTicketType";
import { addGenders } from "./addGender";
import { addAdmins } from "./addAdmin";
import { addSubjects } from "./addSubject";

const rootReducer = combineReducers({
  login,
  addTickets,
  addGenders,
  addAdmins,
  addSubjects
});

export default rootReducer;
