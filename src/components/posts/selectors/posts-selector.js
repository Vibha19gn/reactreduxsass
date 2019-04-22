import getFetchPosts from "./selector";

export default (state) => {
  const {
    posts = []
  } = getFetchPosts(state) || [];
  return posts;
};
