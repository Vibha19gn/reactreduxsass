import { combineReducers } from "redux";
import {
  postsReducers,
  config as postsConfig
} from "./components/posts";

export default combineReducers({
  [postsConfig.STATE_KEY]: postsReducers
});
