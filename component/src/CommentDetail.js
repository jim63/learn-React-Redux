import React from "react";
import Faker from "faker";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avator} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
