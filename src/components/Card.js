import React from "react";

function Card({ blog, deleteBlog }) {
  const handleDelete = () => {
    deleteBlog(blog.id);
  };

  return (
    <div className="Card">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <p>Author: {blog.author}</p>
      <p>Created At: {blog.createdAt}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Card;