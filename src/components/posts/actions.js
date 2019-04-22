import fetch from 'isomorphic-fetch';
import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as config from "./config";
import {actions as spinnerActions} from "../spinner";

export const fetchPostsSuccess = actionCreator(
  actionTypes.FETCH_POSTS_SUCCESS, "posts");

export const fetchPostsFailure = actionCreator(
  actionTypes.FETCH_POSTS_FAILURE, "error");


export function fetchPosts() {
  return (dispatch) => {
    dispatch(spinnerActions.openSpinner());
    return fetch(`${config.API_ENDPOINT_POSTS}​`)
      .then(response => response.json())
      .then((result) => {
        dispatch(fetchPostsSuccess(result.slice(0, 8)));
        dispatch(spinnerActions.closeSpinner());
      }).catch(() => {
        dispatch(spinnerActions.closeSpinner());
        dispatch(fetchPostsFailure("Failed.Please try again"));
      });
  };
}
