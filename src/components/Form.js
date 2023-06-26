import React, { useState } from "react";

function Form({ addBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      content,
      author,
      createdAt: new Date().toISOString(),
    };

    addBlog(newBlog);

    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div className="Form">
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Form;