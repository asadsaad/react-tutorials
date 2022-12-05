import axios from "axios";

const setauthheader = (token) => {
  if (token) {
    axios.defaults.headers["x_auth"] = token;
  } else {
    delete axios.defaults.headers["x_auth"];
    localStorage.removeItem("access_token");
  }
};

export default setauthheader;
