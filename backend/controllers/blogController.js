const Blog = require('../models/Blog');

// Get all blogs/articles
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error in getAllBlogs:', error);
    res.status(500).json({ message: 'An error occurred while retrieving the blogs.' });
  }
};

// Get a specific blog/article by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error('Error in getBlogById:', error);
    res.status(500).json({ message: 'An error occurred while retrieving the blog.' });
  }
};

// Create a new blog/article
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newBlog = new Blog({
      title,
      content,
    });

    await newBlog.save();

    res.status(201).json({ message: 'Blog created successfully.', blog: newBlog });
  } catch (error) {
    console.error('Error in createBlog:', error);
    res.status(500).json({ message: 'An error occurred while creating the blog.' });
  }
};

// Update an existing blog/article
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    res.status(200).json({ message: 'Blog updated successfully.', blog: updatedBlog });
  } catch (error) {
    console.error('Error in updateBlog:', error);
    res.status(500).json({ message: 'An error occurred while updating the blog.' });
  }
};

// Delete a blog/article
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    res.status(200).json({ message: 'Blog deleted successfully.' });
  } catch (error) {
    console.error('Error in deleteBlog:', error);
    res.status(500).json({ message: 'An error occurred while deleting the blog.' });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
