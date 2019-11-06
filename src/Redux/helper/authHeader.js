// import { Buffer } from "buffer";
// import { REACT_APP_API_TOKEN } from "dotenv";
// console.log("=================" + REACT_APP_API_TOKEN);
// const ApiToken = API_TOKEN;
// const buff = new Buffer(ApiToken);
// const base64data = buff.toString("base64");
// export const base64dataToHeader = process.env.REACT_APP_API_TOKEN;
// console.log(base64dataToHeader);

// import { Buffer } from "buffer";
// const buff = new Buffer(process.env.REACT_APP_API_TOKEN);
// console.log(process.env.REACT_APP_API_TOKEN);
// const base64data = buff.toString("base64");
export const base64dataToHeader = process.env.REACT_APP_API_TOKEN.toString();
