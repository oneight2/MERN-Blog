const initialStateHome = {
  dataBlog: [],
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      // copy state dulunya dengan cara spredd opertaor ...
      ...state,
      // apa yang mau diubah
      dataBlog: action.payload,
    };
  }
  return state;
};

export default homeReducer;
