import getFetchProducts from "./selector";

export default (state) => {
  const {
    products = {}
  } = getFetchProducts(state) || {};
  return products;
};
