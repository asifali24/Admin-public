import { userConstants } from "../constants";
import { base64dataToHeader } from "../helper/authHeader";
import { BASE_URL } from "../../config/constants";
import axios from "axios";
import { deviceStorage } from "../helper/deviceStorage";
const AuthData = "Basic " + base64dataToHeader;

/* **************************Login***************************** */
export const login = loginData => dispatch => {
  axios({
    method: "POST",
    url: BASE_URL + "/admin/authenticate",
    data: {
      ...loginData
    },
    headers: { Authorization: AuthData }
  })
    .then(res => {
      // console.log(res.data)
      const userToken = res.data.token;
      deviceStorage.saveKey("userToken", userToken);

      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      const errorStatus = error;
      // console.log(JSON.stringify(errorStatus))
      // console.log(error.response)
      dispatch({
        type: userConstants.LOGIN_FAILURE,
        payload: errorStatus
      });
    });
};

/******************************Add Gender************************ */
export const addGenders = (gender, token) => dispatch => {
  // dispatch({
  //   type: userConstants.ADD_GENDER_REQUEST,
  //   payload: Gender
  // });
  console.log({ gender });
  axios({
    method: "POST",
    url: BASE_URL + "admin/system/gender",
    data: {
      ...gender
    },
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      const addGenders = res.data.status.message;
      dispatch({
        type: userConstants.ADD_GENDER_SUCCESS,
        payload: gender
      });
      dispatch({
        type: userConstants.CLEAR,
        payload: ""
      });
    })
    .catch(error => {
      console.log(JSON.stringify(error));
      const errorStatus = error.response.data.status.message;
      dispatch({
        type: userConstants.ADD_GENDER_FAILURE,
        payload: errorStatus
      });
    });
};

/***********************Add Subject******************************* */

export const addSubjects = (Subject, token) => dispatch => {
  axios({
    method: "POST",
    url: BASE_URL + "admin/system/subject",
    data: {
      ...Subject
    },
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      const addSubjects = res.data.status.message;
      dispatch({
        type: userConstants.ADD_SUBJECT_SUCCESS,
        payload: Subject
      });
      dispatch({
        type: userConstants.CLEAR,
        payload: ""
      });
    })
    .catch(error => {
      console.log(JSON.stringify(error));
      const errorStatus = error.response.data.status.message;
      dispatch({
        type: userConstants.ADD_SUBJECT_FAILURE,
        payload: errorStatus
      });
    });
};

/************************* Add Admin**************************** */

export const addAdmins = (Admin, token) => dispatch => {
  // console.log(token);
  axios({
    method: "POST",
    url: BASE_URL + "/admin",
    data: {
      ...Admin
    },
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      const addAdmins = res.data.status.message;
      dispatch({
        type: userConstants.ADD_ADMIN_SUCCESS,
        payload: Admin
      });
      dispatch({
        type: userConstants.CLEAR,
        payload: ""
      });
    })
    .catch(error => {
      console.log(JSON.stringify(error));
      const errorStatus = error.response.data.status.message;
      dispatch({
        type: userConstants.ADD_ADMIN_FAILURE,
        payload: errorStatus
      });
    });
};

/**********************Add support Ticket Type*********************** */
export const addTickets = (ticket, token) => dispatch => {
  // console.log(token);
  axios({
    method: "POST",
    url: BASE_URL + "admin/support/tickettype",
    data: {
      ...ticket
    },
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      console.log(JSON.stringify(res));
      const addTickets = res.data.status.message;
      dispatch({
        type: userConstants.ADD_TICKET_REQUEST,
        payload: ticket
      });
      dispatch({
        type: userConstants.CLEAR,
        payload: ""
      });
    })
    .catch(error => {
      console.log(JSON.stringify(error));
      const errorStatus = error.response.data.status.message;
      dispatch({
        type: userConstants.ADD_TICKET_FAILURE,
        payload: errorStatus
      });
    });
};
