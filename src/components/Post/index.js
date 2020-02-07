import React from 'react';
import Comment from '../Comment';
import './style.css';

function Post({ post }) {
  return (
    <div className="post">
      <div className="user">
        <img className="avatar" src={post.author.avatar} />
        <div className="name">
          {post.author.name}
          <span className="date">{post.date}</span>
        </div>
      </div>
      <p className="content">{post.content}</p>
      <div className="line"></div>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Post;
