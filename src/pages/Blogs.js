import React, { useState } from "react";
import { blogsdata } from "../data.js";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs] = useState(blogsdata);

  //slice data
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  console.log(blogs);

  return (
    <div>
      <h1>Blog Pages</h1>
      <section>
        {blogs.map((blog, index) => {
          const { id, title, body } = blog;
          return (
            <article key={index}>
              <p>{title}</p>
              <p>{truncateString(body, 100)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn more
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
