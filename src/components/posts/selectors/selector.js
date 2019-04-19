import {STATE_KEY} from "../config";

export default (state) => {
  console.log('sfsfg==',STATE_KEY);
  return state[STATE_KEY];
};
