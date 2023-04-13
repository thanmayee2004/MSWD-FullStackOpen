const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likesArray = blogs.map((blog) => blog.likes);

  const likes = likesArray.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return likes;
};

const favouriteBlog = (blogs) => {
  const likesArray = blogs.map((blog) => blog.likes);

  const max = likesArray.reduce((acc, cur) => Math.max(acc, cur));

  const indexOfMax = likesArray.indexOf(max);

  const theFavouriteBlog = blogs[indexOfMax];
  delete theFavouriteBlog._id;
  delete theFavouriteBlog.url;
  delete theFavouriteBlog.__v;

  return theFavouriteBlog;
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
};
