export const products = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return action.products;
    default:
      return state;
  }
};

export default products;
