import axios from "axios";

export default axios.create({
  baseURL: "https://api-backend-json-server.herokuapp.com/",
});
