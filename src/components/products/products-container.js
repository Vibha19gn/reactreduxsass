import {connect} from "react-redux";
import Products from "./products";
import * as selectors  from "./selectors";
import {fetchProducts} from './actions';

export const mapStateToProps = (state) => {
  return {
    products: selectors.getProducts(state)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
