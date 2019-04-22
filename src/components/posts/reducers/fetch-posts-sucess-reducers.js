export const posts = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return action.posts;
    default:
      return state;
  }
};

export default posts;
