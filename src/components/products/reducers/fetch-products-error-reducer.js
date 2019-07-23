export const error = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_FAILURE':
      return {};
    default:
      return state;
  }
};

export default error;
