import AxiosInstance from "../../../helpers/axiosInterceptor";
import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";

export default ({
                  Email, password, username, firstName: first_name, lastName: last_name,
                }) => dispatch => {
  dispatch({
    type: REGISTER_LOADING,
  });

  AxiosInstance.post("auth/register", {
    Email, password, username, first_name, last_name,

  }).then((res) => {


    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  }).catch((err) => {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response ? err.response.data : { error: "something went wrong, try again" },
    });
  });

};
