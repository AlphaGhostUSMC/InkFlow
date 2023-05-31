import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <BlogItem
          key={blog.id}
          title={blog.title}
          author={blog.author}
          content={blog.content}
        />
      ))}
    </div>
  );
};

export default BlogList;
