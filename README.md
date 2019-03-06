# React & Redux

## React
- React is a JavaScript
- React's purpose is to show content to users and handle user interaction

- React can work by itself, and can alse work with a variety of other libraies, packages, servers and databases
- React is split into two separate libraries
	- React knows what a components work together
	- TeactDOM knows how to take a component and make it show up in the DOM


### How to create react app

1. install Node JS
2. install create-react-app
	- `$npm install -g create-react-app`
3. generate a project (it's huge...)
	- `$create-react-app [project name]`
4. bulid project
	- in the project folder
		1. src : where we put all code we write
		2. public : store static files 
		3. node_module : contain all dependencies
		4. package.json : record our dependencies that project required
		5. package-lock.json : record the exact version of dependencies
		6. README.md : introduction

## JSX vs HTML
JSX 並非一種全新的語言，而是一種語法糖（Syntatic Sugar），一種語法類似 XML 的 ECMAScript 語法擴充。瀏覽器無法直接讀取，所以必須要使用 [Babel](https://babeljs.io/) 來轉換。

- 較 React.createElement 更加方便簡潔。
- 和 HTML 很像，但是有些地方不同。
	1. style
		- HTML `<div style="background-color:red"></div>` 
		- JSX `<div style={{backgroundColor:'red'}}></div>` 
	2. class ( can be relax )
		- HTML `<label class="label" for="name">Enter name:</label>`

		- JSX `<label className="label" HTMLfor="name">Enter name:</label>`
	3. vaiable can be ***string or number but not object***
		- JSX `<button style={{ backgroundColor: "red", color: "white" }}>{getButtontext()}</button>`

[一看就懂的 JSX 簡明入門教學指南
](https://blog.techbridge.cc/2016/04/21/react-jsx-introduction/)

## Communicating with Props
### Component ***Nseting***
### Component ***Reusability***
### Component ***Configuration***

### React's props system
- System for passing data from a parent component to a child component, the goal is to show some content to users or react to user interaction.
- The child cannot send props to the parent.


![props system](https://github.com/jim63/learn-React-Redux/blob/master/imgs/propsSystem.png?raw=true)

index.js


```js
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name="Sam" />
      <CommentDetail name="Alex" />
      <CommentDetail name="Jim" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
```

CommentDetail.js

```js
import React from "react";
import Faker from "faker";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={Faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
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
```

