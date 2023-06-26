import React from "react";
import Card from "./Card";

function Blogs({ blogs, deleteBlog }) {
  return (
    <div className="Blogs">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <Card key={blog.id} blog={blog} deleteBlog={deleteBlog} />
      ))}
    </div>
  );
}

export default Blogs;