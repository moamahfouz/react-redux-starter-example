// a fucntion that returns a state
const reducer = (state = 0, action) => {
  // takes two params inital state
  // we have to read the action and return the approipate state
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
