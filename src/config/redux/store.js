import { createStore } from "redux";

const initialState = {
  dataBlogs: [],
  name: "syarif",
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      // copy state dulunya dengan cara spredd opertaor ...
      ...state,
      // apa yang mau diubah
      dataBlogs: action.payload,
    };
  }
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "hidayat",
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
