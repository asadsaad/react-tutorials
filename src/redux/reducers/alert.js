const initialState = {
  message: "This is Success Massage",
  type: null,
};

function Alerts(state = initialState, type) {
  switch (type) {
    default:
      return {
        ...state,
      };
  }
}
export default Alerts;
