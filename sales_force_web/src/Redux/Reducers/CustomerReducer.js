const customerModel = {
  id: 0,
  name: "",
  phone: "",
  address: "",
  zipcode: ""
};

export const CustomerReducer = (state = customerModel, action) => {
  switch (action.type) {
    case "LOAD_CUSTOMER":
      return action.payload;
    case "SELECT_DATA":
      return action.payload;
    case "CREATE_CUSTOMER":
      return action.payload;
    case "EDIT_CUSTOMER":
      return action.payload;
    case "DELETE_CUSTOMER":
      return action.payload;
    default:
      return state;
  }
};
