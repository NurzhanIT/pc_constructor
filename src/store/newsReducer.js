const defaultState = {
  news: [],
};
export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        news: [...action.payload],
      };
    default:
      return state;
  }
};
export const setNews = (payload) => ({ type: "GET_NEWS", payload });
