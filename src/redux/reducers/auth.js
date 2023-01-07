/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const initialState = {
  loading: false,
  user: null,
  isAuthenticted: false,
  token: null,
};

function authstate(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
export default authstate;
