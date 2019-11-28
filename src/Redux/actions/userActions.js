import { userConstants } from "../constants";
import { base64dataToHeader } from "../helper/authHeader";
import { BASE_URL } from "../../config/constants";
import axios from "axios";
import { deviceStorage } from "../helper/deviceStorage";
const AuthData = "Basic " + base64dataToHeader;

/* **************************Login***************************** */
export const login = loginData => dispatch => {
  dispatch({
    type: userConstants.LOGIN_REQUEST,
    payload: loginData
  });
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
      console.log(JSON.stringify(errorStatus));
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
      const addGenders = res.data.status.message;
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
      const addGenders = res.data.status.message;
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

/**********************Add Ticket Type*********************** */
export const addTickets = (Ticket, token) => dispatch => {
  // console.log(token);
  axios({
    method: "POST",
    url: BASE_URL + "admin/support/tickettype",
    data: {
      ...Ticket
    },
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      // console.log(JSON.stringify(res));
      const addGenders = res.data.status.message;
      dispatch({
        type: userConstants.ADD_TICKET_REQUEST,
        payload: Ticket
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

/************************** GET STUDENTS********************* */

export const getStudents = token => dispatch => {
  console.log("****************************************************");
  var studentsData = [];
  dispatch({
    type: userConstants.GET_STUDENT_REQUEST,
    payload: token
  });
  axios({
    url: BASE_URL + "admin/user?role=student",
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      console.log(res.data);
      let len = res.data.users.length;
      for (let i = 0; i < len; i++) {
        // console.log(
        //   res.data.users,
        //   "*************************////////////*************"
        // );
        var data = {
          id: res.data.users[i].id,
          name: res.data.users[i].name,
          phone: res.data.users[i].phone,
          joining: res.data.users[i].joinedOn,
          isVerified: res.data.users[i].isVerified,
          sessionTaken: res.data.users[i].sessionTaken,
          email: res.data.users[i].email
        };
        studentsData.push(data);
      }

      dispatch({
        type: userConstants.GET_STUDENT_SUCCESS,
        payload: studentsData
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: userConstants.GET_STUDENT_FAILURE,
        payload: error
      });
    });
};

/********************************get tutors******************* */
export const getTutors = token => dispatch => {
  var tutorsData = [];
  dispatch({
    type: userConstants.GET_TUTORS_REQUEST,
    payload: token
  });
  axios({
    url: BASE_URL + "admin/user?role=tutor",
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      console.log(res.data);
      let len = res.data.users.length;
      for (let i = 0; i < len; i++) {
        var data = {
          id: res.data.users[i].id,
          name: res.data.users[i].name,
          phone: res.data.users[i].phone,
          joining: res.data.users[i].joinedOn,
          isVerified: res.data.users[i].isVerified,
          sessionTaken: res.data.users[i].sessionTaken,
          email: res.data.users[i].email
        };
        tutorsData.push(data);
      }

      dispatch({
        type: userConstants.GET_TUTORS_SUCCESS,
        payload: tutorsData
      });
    })
    .catch(error => {
      console.log("**************************************");
      console.log(error);
      dispatch({
        type: userConstants.GET_TUTORS_FAILURE,
        payload: error
      });
    });
};

/*********************************Verify users******************** */

export const verifyUser = (ids, token) => dispatch => {
  dispatch({
    type: userConstants.CHANGE_STATUS_REQUEST,
    payload: token
  });
  console.log(ids.id + "****************");
  console.log(ids);

  axios({
    method: "PUT",
    url: BASE_URL + "admin/user/" + ids.id + "/verify",
    data: {
      ...ids
    },
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      const verifyUsers = res.data.status.message;
      dispatch({
        type: userConstants.CHANGE_STATUS_SUCCESS,
        payload: ids
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
        type: userConstants.CHANGE_STATUS_FAILURE,
        payload: errorStatus
      });
    });
};
/****************************Add Subscription*************************** */
export const addSubscription = (subscription, token) => dispatch => {
  console.log(subscription, "<===================>");
  axios({
    method: "POST",
    url: BASE_URL + "admin/subscription",
    data: {
      ...subscription
    },
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      console.log("sucess........");
      const addSubscription = res.data.status.message;
      dispatch({
        type: userConstants.ADD_SUBSCRIPTION_SUCCESS,
        payload: res.data
      });
      dispatch({
        type: userConstants.CLEAR,
        payload: ""
      });
      console.log(res, "***************");
    })
    .catch(error => {
      console.log("Failure...........");
      // console.log(JSON.stringify(error));
      console.log(error.response);
      const errorStatus = error.response.data.status.message;
      dispatch({
        type: userConstants.ADD_SUBSCRIPTION_FAILURE,
        payload: errorStatus
      });
    });
};
/******************price Bucket****************************** */
export const getPriceBucket = token => dispatch => {
  console.log("****************************************************");
  var priceBucket = [];
  priceBucket.push({
    id: "Select"
  });
  dispatch({
    type: userConstants.GET_PRICEBUCKET_REQUEST,
    payload: token
  });
  axios({
    url: BASE_URL + "system/pricebucket",
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      // console.log(res, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      let len = res.data.price_buckets.length;
      for (let i = 0; i < len; i++) {
        var data = {
          id: res.data.price_buckets[i].id,
          name: res.data.price_buckets[i].name,
          min_value: res.data.price_buckets[i].min_value,
          max_value: res.data.price_buckets[i].max_value
        };
        priceBucket.push(data);
      }

      dispatch({
        type: userConstants.GET_PRICEBUCKET_SUCCESS,
        payload: priceBucket
      });
    })
    .catch(error => {
      console.log(error, "##########################");
      console.log(JSON.stringify(error));
      dispatch({
        type: userConstants.GET_PRICEBUCKET_FAILURE,
        payload: error
      });
    });
};
/******************Ge Session ************************ ****************************/
export const getSession = token => dispatch => {
  console.log("****************************************************");
  var sessionData = [];
  dispatch({
    type: userConstants.GET_SESSION_REQUEST,
    payload: token
  });
  axios({
    url: BASE_URL + "admin/session",
    headers: { Authorization: AuthData, Token: token }
  })
    .then(res => {
      console.log(res.data);
      let len = res.data.tutoringSessions.length;
      for (let i = 0; i < len; i++) {
        // console.log(
        //   res.data.users,
        //   "*************************////////////*************"
        // );
        var data = {
          tutor: res.data.tutoringSessions[i].tutor.name,
          student: res.data.tutoringSessions[i].student.name,
          sessionStatus: res.data.tutoringSessions[i].sessionStatus,
          tutoringSessionDate: res.data.tutoringSessions[i].tutoringSessionDate,
          subject: res.data.tutoringSessions[i].subject,
          paymentMode: res.data.tutoringSessions[i].paymentMode
        };
        sessionData.push(data);
      }

      dispatch({
        type: userConstants.GET_SESSION_SUCCESS,
        payload: sessionData
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: userConstants.GET_SESSION_FAILURE,
        payload: error
      });
    });
};
