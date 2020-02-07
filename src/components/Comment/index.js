import React from 'react';
import './style.css';

function Comment({ comment }) {
  return (
    <div className="commentGroup">
      <img key={comment.id} src={comment.author.avatar} className="avatar" />
      <div className="boxComment">
        <p className="contentComment">
          <span className="nameComment">{comment.author.name}</span>
          {comment.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
