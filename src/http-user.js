import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.0.15:8080/cinematicketing",
    headers: {
      "Content-type": "application/json",
    }
  });