import getFetchPosts from "./selector";

export default (state) => {
  const {
    posts = []
  } = getFetchPosts(state) || [];
  console.log('posts===inselecotr', getFetchPosts(state));
  return posts;
};
