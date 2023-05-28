const express = require('express');
const router = express.Router();
const { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

// Get all blogs
router.get('/', getAllBlogs);

// Get a specific blog by ID
router.get('/:id', getBlogById);

// Create a new blog
router.post('/', createBlog);

// Update an existing blog
router.put('/:id', updateBlog);

// Delete a blog
router.delete('/:id', deleteBlog);

module.exports = router;
