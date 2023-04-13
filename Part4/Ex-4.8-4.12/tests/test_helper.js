const Blog = require("../models/blog");
const User = require("../models/user");

const initialBlogs = [
  {
    title: "Ways to write a blog",
    author: "Sithabile Mananga",
    likes: 234,
    url: "some url",
  },
  {
    title: "How to NOT write a blog",
    author: "Ahlonele Mananga",
    likes: 356,
    url: "some url",
  },
];

const nonExistingId = async () => {
  const blog = new Blog({
    title: "a blog to be deleted",
    author: "User unknown",
    url: "some url",
  });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
  usersInDb,
};
