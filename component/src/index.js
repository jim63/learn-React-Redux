import React from "react";
import Faker from "faker";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h2>warning</h2>
          arwekofmnkoew????
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Sam"
          timeAgo="Today at 4:00PM"
          content="Nice post"
          avator={Faker.image.avatar()}
        />
        <CommentDetail
          name="Sam"
          timeAgo="Today at 4:00PM"
          content="Nice post"
          avator={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Alex"
          timeAgo="Today at 2:00PM"
          content="GOGO"
          avator={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Jim"
          timeAgo="Yesterday at 9:00PM"
          content="KOKO"
          avator={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
