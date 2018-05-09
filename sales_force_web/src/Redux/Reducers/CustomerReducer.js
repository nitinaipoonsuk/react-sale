const customerModel = {
  name: "",
  phone: "",
  address: "",
  zipcode: ""
};

export const CustomerReducer = (state = customerModel, action) => {
  switch (action.type) {
    case "LOAD_CUSTOMER":
      return action.payload;
    default:
      return state;
  }
};
