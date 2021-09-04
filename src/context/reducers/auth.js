import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";

const auth = (state, { type, payload }) => {

  switch (type) {
    case REGISTER_LOADING:
      console.log("state ", state);
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      console.log("state ", state);
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case REGISTER_FAIL:
      console.log("state ", state);
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_AUTH_STATE:
      console.log("state ", state);
      return {
        ...state,
        loading: false,
        data: null,
        error:null
      };

    default:
      return state;
  }

};

export default auth;
