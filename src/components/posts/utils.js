const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getRandomTime = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const generateRandomDate = () => {
  const start = new Date(2019, 0, 1);
  const end = new Date();
  const date = getRandomTime(start, end);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export const groupPosts = (posts, size) => {
  return posts.reduce((chunks, item, i) => {
    if (i % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
}
