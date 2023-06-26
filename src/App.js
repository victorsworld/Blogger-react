import React, { useState } from "react";
import Form from "./components/Form";
import Blogs from "./components/Blogs";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) =>{ 
      return blog.id !== id
    }));
  };

  return (
    <div className="App">
      <Form addBlog={addBlog} />
      <Blogs blogs={blogs} deleteBlog={deleteBlog} />
    </div>
  );
}

export default App;
