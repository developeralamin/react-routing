import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { blogsdata } from "../data.js";

const Blog = () => {
  const { title } = useParams();
  let location = useLocation();

  console.log(location);

  // const [bodyData, setBodyData] = useState("");

  // useEffect(() => {
  //   const blogData = blogsdata.filter((blog) => blog.title === title);
  //   setBodyData(blogData[0].body);
  // }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice()}</p>
    </div>
  );
};

export default Blog;
