import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/vue3/laravel/api",
  headers: {
    "Content-type": "application/json"
  }
});