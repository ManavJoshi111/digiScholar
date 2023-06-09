import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./AllBlogs.css";

function AllBlogs() {

  const [data, setData] = useState();

  const getBlogsData = async () => {
    console.log("In function");
    const res = await fetch("http://localhost:5000/blog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("Data is : ", data);
    setData(data.blogs);
  }
  useEffect(() => {
    getBlogsData();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>
  }
  else {
    return (
      <div className="main-post">
        <div className="head">
          <h1>See Our Blogs</h1>
          <h5>
            Stay current with all the latest scholarships , applications and more.
          </h5>
        </div>
        <div className="grid">
          {data.map((post) => {
            return (
              <div className="card-for-blog d-flex justify-content-center align-items-center flex-column" key={post._id}>
                <img className="temp-image" src="./Images/temp_1.png  " alt={"Error"} />
                <p>"{post.title.slice(0, 80)}..."</p>
                <Link to={`/blog/${post._id}`} className="link">
                  <div className="postAuthor">{post.content.slice(0, 15)}...</div>
                </Link><br /><br />
              </div>
            );
          })}
        </div>
        <div className="mb-4"></div>
      </div >

    );
  }
}

export default AllBlogs;


// src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1064.jpg"