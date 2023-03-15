const defaultState = {
  user: false,
};
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_LOG":
      return {
        ...state,
        user: true,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        user: false,
      };
    default:
      return state;
  }
};
export const userLogState = () => ({ type: "USER_LOG" });
export const userLogOut = () => ({ type: "USER_LOGOUT" });
