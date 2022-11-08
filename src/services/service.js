import ax from "axios";


const axios = ax.create({
  baseURL:
    "http://prmsservice-env-1.eba-zbze2hw3.ap-south-1.elasticbeanstalk.com/api/prms/project",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;