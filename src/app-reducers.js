import { combineReducers } from "redux";
import {
  postsReducers,
  config as postsConfig
} from "./components/posts";

import { spinnerReducers as spinner } from "./components/spinner";

export default combineReducers({
  spinner,
  [postsConfig.STATE_KEY]: postsReducers
});
