const initState = {
  isLoading: false,
};

const utils = (state = initState, action) => {
  switch (action.type) {
    case "SPIN_START":
      return {
        ...state,
        isLoading: true,
      };

    case "SPIN_STOP":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default utils;
