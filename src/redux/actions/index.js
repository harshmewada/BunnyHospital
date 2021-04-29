import { userTypes } from "../../constants/types";

export const loginUser = (data) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: data,
  };
};

export const logoutUser = (data) => {
  return {
    type: userTypes.LOGOUT_USER,
  };
};
