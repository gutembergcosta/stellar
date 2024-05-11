import axios from "axios";

const authToken = localStorage.getItem('authToken')

export default axios.create({
  baseURL: process.env.VUE_APP_APIURL,
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + authToken
  }
});