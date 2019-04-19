import React, {Component} from 'react';
import PropTypes from "prop-types";
import PostsRow from "./components/posts-row";
import * as utils from "./utils";

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      fetchPosts
    } = this.props;
    fetchPosts();
  }

  renderPosts(posts) {
    const postsRow = utils.groupPosts(posts, 4);
    return postsRow.map((posts) => {
      return (
        <PostsRow
          posts={posts}
        />
      )
    });
  }

  render() {
    const {
      posts = []
    } = this.props;
    console.log('posts===aiyyo', posts);
    return (
      <div className="posts">
        {posts &&
        this.renderPosts(posts)
        }
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array
};

export default Posts;
