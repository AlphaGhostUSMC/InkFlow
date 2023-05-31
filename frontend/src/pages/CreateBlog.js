import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBlog } from '../services/api';

const CreateBlog = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createBlog({ title, content, author });
      history.push('/blogs'); // Redirect to the blogs list page after successful creation
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={handleAuthorChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
