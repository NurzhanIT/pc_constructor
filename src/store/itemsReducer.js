const defaultState = {
  components: [],
  updateComponents: false,
};

export const componentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_COMPONENTS":
      return {
        ...state,
        components: [...action.payload],
      };
    case "Update_components":
      return {
        ...state,
        updateComponents: !state.updateComponents,
      };
    default:
      return state;
  }
};
export const setComponents = (payload) => ({ type: "GET_COMPONENTS", payload });
export const updateComponentState = () => ({ type: "Update_components" });
