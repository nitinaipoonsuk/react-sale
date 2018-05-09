const validate = {
  invalid: false
};

export const ValidateReducer = (state = validate, action) => {
  switch (action.type) {
    case "ISVALID":
      state = {
        invalid: action.payload
      };
      return state;
    default:
      return state;
  }
};
