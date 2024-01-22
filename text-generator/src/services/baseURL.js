import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://baconipsum.com/",
});

export default axiosInstance;
