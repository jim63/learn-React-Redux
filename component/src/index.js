import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const people = [
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  },
  {
    name: Faker.internet.userName(),
    photo: Faker.image.avatar(),
    content: Faker.lorem.text()
  }
];

const App = () => {
  return (
    <div className="ui container comments">
      {people.map(({ name, photo, content }) => {
        return <CommentDetail name={name} content={content} avator={photo} />;
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
