import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
});

export const postVotes = async (data) => {
  return await httpClient.post("/votes", data);
};
export const getLogs = async () => {
  return await httpClient.get("/logs");
};
export const getVotesByDate = async (date) => {
  console.log(date);
  return await httpClient.post("/statistic", date);
};
