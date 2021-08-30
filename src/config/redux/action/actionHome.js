import axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
  console.log(page)
  axios
    .get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
    .then(result => {
      const responAPI = result.data;
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responAPI.data });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
