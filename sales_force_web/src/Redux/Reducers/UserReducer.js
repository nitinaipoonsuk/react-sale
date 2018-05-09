const userModel = {
  id: 0,
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  address: ""
};

export const UserReducer = (state = userModel, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return action.payload;
    case "SELECT_DATA":     
      return action.payload;
    case "CREATE_USER":
      return action.payload;
    case "EDIT_USER":
      return action.payload;
    case "DELETE_USER":
      return action.payload;
    default:
      return state;
  }
};
