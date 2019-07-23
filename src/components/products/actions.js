import fetch from 'isomorphic-fetch';
import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as config from "./config";
import {actions as spinnerActions} from "../spinner";

export const fetchProductsSuccess = actionCreator(
    actionTypes.FETCH_PRODUCTS_SUCCESS, "products");

export const fetchProductsFailure = actionCreator(
  actionTypes.FETCH_PRODUCTS_FAILURE, "error");


export function fetchProducts() {
  return (dispatch) => {
    dispatch(spinnerActions.openSpinner());
    //setTimeout(fu)
    let results = {
      productList: [{
        "image": "https://cdna.4imprint.co.uk/prod/700/67949.jpg",
        "title": "bag-pink",
        "currency": "Rs.",
        "price": "12",
        "category": "Bags",
        "categoryId": "1211",
      },
        {
          "image": "https://cdna.4imprint.co.uk/prod/700/79694.jpg",
          "title": "bag",
          "price": "13",
          "currency": "Rs.",
          "categoryId": "1211",
          "category": "Bags"
        },
        {
          "image": "https://cdna.4imprint.co.uk/prod/700/79711.jpg",
          "title": "bag",
          "price": "14",
          "currency": "Rs.",
          "categoryId": "1211",
          "category": "Bags"
        },
        {
          "image": "https://cdna.4imprint.co.uk/prod/700/84501.jpg",
          "title": "bag",
          "price": "1.2",
          "currency": "Rs.",
          "category": "Clothes",
          "categoryId": "1212",
        },
        {
          "image": "https://cdna.4imprint.co.uk/prod/rend/700/84501/6_6.jpg",
          "title": "bag",
          "price": "1.2",
          "currency": "Rs.",
          "category": "Clothes",
          "categoryId": "1212",
        },
        {
          "image": "https://cdna.4imprint.co.uk/prod/rend/700/84501/3_3.jpg",
          "title": "bag",
          "price": "1.2",
          "currency": "Rs.",
          "category": "Clothes",
          "categoryId": "1212",
        }],
      "categories" : ["Bags", "Clothes"]
    }
    dispatch(fetchProductsSuccess(results));
    dispatch(spinnerActions.closeSpinner());
    // return fetch(`${config.API_ENDPOINT_POSTS}​`)
    //   .then(response => response.json())
    //   .then((result) => {
    //     dispatch(fetchProductsSuccess(result.slice(0, 8)));
    //     dispatch(spinnerActions.closeSpinner());
    //   }).catch(() => {
    //     dispatch(spinnerActions.closeSpinner());
    //     dispatch(fetchProductsFailure("Failed.Please try again"));
    //   });
  };
}
