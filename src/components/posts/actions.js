import fetch from 'isomorphic-fetch';
import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as config from "./config";

export const fetchPostsSuccess = actionCreator(
  actionTypes.FETCH_POSTS_SUCCESS, "posts");

export const fetchPostsFailure = actionCreator(
  actionTypes.FETCH_POSTS_FAILURE, "error");


export function fetchPosts() {
  return (dispatch) => {
   // dispatch(fetchPostsSuccess(result));
    return fetch(`${config.API_ENDPOINT}/bins/rz0wi​`)
      .then(response => response.json())
      .then((result) => {
       // const posts = utils.getPosts(result);
        dispatch(fetchPostsSuccess(result.slice(0, 8)));
      }).catch(() => {
        dispatch(fetchPostsFailure("Failed.Please try again"));
      });
  };
}
