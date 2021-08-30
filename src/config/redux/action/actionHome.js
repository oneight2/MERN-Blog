import axios from "axios";

export const setDataBlog = () => (dispatch) => {
  axios
    .get("http://localhost:4000/v1/blog/posts?page=1&perPage=2")
    .then((result) => {
      const responAPI = result.data;
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responAPI.data });
    })
    .catch((err) => {
      console.log("err", err);
    });
};