import React from 'react';
import PropTypes from "prop-types";
import * as utils from "../utils";

const PostsRow = (props) => {
  const {
    post: {
      title,
      body
    } = {},
    key
  } = props;

  return (
    <div
      className="post"
      key={`post-${key}`}>
        <div className="post-title alignCenter">
          <p className="text textFont truncate"> {title} </p>
        </div>
        <div className="post-date alignCenter">
          <span className="dateText textFont">
            {utils.generateRandomDate()}
          </span>
        </div>
        <div className="post-body"><p className="post-body-text truncate-lines">{body}</p></div>
        <div className="post-readMore">
          <button className="btn-medium">READ MORE</button>
        </div>
    </div>
  );
};

PostsRow.propTypes = {
  posts: PropTypes.array
};

export default PostsRow;
