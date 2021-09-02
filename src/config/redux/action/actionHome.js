import axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
  console.log(page)
  axios
    .get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
    .then(result => {
      const responAPI = result.data;
      console.log('responAPI:', responAPI)
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responAPI.data });

      dispatch({
        type: "UPDATE_PAGE",
        payload:{
          currentPage: responAPI.currentPage,
          totalPage: Math.ceil(responAPI.totalData/responAPI.perPage)
        }
      })
    })
    .catch((err) => {
      console.log("err", err);
    });
};
