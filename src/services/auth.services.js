import api from "../lib/api";

export const signUp = (data) => {
  return api.post("/owner/sign-up", data);
};

export const signIn = (data) => {
  return api.post("/owner/sign-in", data);
};
