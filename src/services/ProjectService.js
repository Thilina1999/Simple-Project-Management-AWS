import axios from "./service";

export const addProject = (data) => axios.post("createProject", data);
export const getAllProject = () => axios.get("getAllproject");
export const deleteProject =(id)=>axios.delete(`deleteProject/${id}`);
export const getProjectByUserId = (UserID) => axios.get(`getProjectByUserId/${UserID}`);