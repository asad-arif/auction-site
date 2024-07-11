import axios from "axios";

export const signup = async (body: any) => {
  const res = await axios.post("http://localhost:7000/signup", body);
  return res;
};
