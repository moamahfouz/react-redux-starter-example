const testReducer = (state = 0, action) => {
  switch (action.type) {
    case "like":
      return state + action.likes;
    default:
      return state;
  }
};

export default testReducer;
