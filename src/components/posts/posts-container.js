import {connect} from "react-redux";
import Posts from "./posts";
import * as selectors  from "./selectors";
import {fetchPosts} from './actions';

export const mapStateToProps = (state) => {
  return {
    posts: selectors.getPosts(state)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
