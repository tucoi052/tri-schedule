import axios from "axios";

let access_token;

const axiosApiInstance = axios.create({
  baseURL: "http://dkhsv.tlu.edu.vn:8092" + "/education/api",
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    if (!access_token) throw new Error("Please login first !! ");
    if (access_token) {
      config.headers = {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export function setAuth(token) {
  access_token = token;
}

export default axiosApiInstance;