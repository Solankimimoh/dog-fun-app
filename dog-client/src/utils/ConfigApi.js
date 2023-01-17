import axios from "axios";
// Configuration of axios with base url
export default axios.create({
  baseURL: "http://localhost:8001/dog/api",
  headers: {
    "Content-type": "application/json",
  },
});
