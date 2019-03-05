import React from "react";
import Faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={Faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {Faker.name.firstName()}
        </a>
        <div className="metadata">
          <span className="date">Today At 6:00PM</span>
        </div>
        <div className="text">Nuce Blog post</div>
      </div>
    </div>
  );
};

export default CommentDetail;
