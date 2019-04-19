import React from 'react';
import PropTypes from "prop-types";
import EachPost from "./each-post";

const PostsRow = (props) => {
  const {
    posts
  } = props;

  const renderPostsInRow = () => {
    return posts.map((post, key) => {
      return (
        <EachPost
          key={key}
          post={post}
        />
      )
    });
  }

  return (
    <div className="postsRow">
      {
        renderPostsInRow()
      }
    </div>
  );
};

PostsRow.propTypes = {
  posts: PropTypes.array
};

export default PostsRow;
