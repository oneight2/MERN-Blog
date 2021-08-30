const initialState = {
  dataBlogs: [],
  name: "syarif",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "hidayat",
    };
  }
  return state;
};

export default globalReducer;
