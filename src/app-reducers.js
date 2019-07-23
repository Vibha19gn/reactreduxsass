import { combineReducers } from "redux";
import {
  productsReducers,
  config as productsConfig
} from "./components/products"

import { spinnerReducers as spinner } from "./components/spinner";

export default combineReducers({
  spinner,
  [productsConfig.STATE_KEY]: productsReducers
});
