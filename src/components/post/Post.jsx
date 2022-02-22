import React from 'react'
import "./post.css"
import {Link} from "react-router-dom"

export default function post({ post }) {

  const PF = "http://localhost:5001/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg"
        src={PF + post.photo}
        alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <span className="postTitle">{post.title}</span>
        </Link>
        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{post.desc}</p>




    </div>


  )
}



