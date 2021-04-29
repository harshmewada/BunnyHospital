import { userTypes } from "../../constants/types";

const allUsers = [
  {
    email: "admin@gmail.com",
    password: "admin",
  },
];
const initState = {
  allUsers: [],
  isLogged: true,
};

const users = (state = initState, action) => {
  switch (action.type) {
    case userTypes.LOGIN_USER:
      return {
        ...state,
        isLogged: true,
      };

    case userTypes.LOGOUT_USER:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};
export default users;
