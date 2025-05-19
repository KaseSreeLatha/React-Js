import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import helloWorldImage from './hello-world.jpg'; // Import image for Example 1
import todoListImage from './to-do-list.jpg'; // Import image for Example 2

const Documentation = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <h3>Table of Contents</h3>
          <ul className="list-group">
            <li className="list-group-item"><a href="#section-1">Introduction</a></li>
            <li className="list-group-item"><a href="#section-2">Installation</a></li>
            <li className="list-group-item"><a href="#section-3">Usage</a></li>
            <li className="list-group-item"><a href="#section-4">Examples</a></li>
          </ul>
        </div>
        <div className="col-lg-9">
          <section id="section-1">
            <h2>Introduction</h2>
            <p>React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components that efficiently update and render as data changes. React was developed by Facebook and is widely used in web development.</p>
          </section>
          <section id="section-2">
            <h2>Installation</h2>
            <p>To install React in your project, you can use npm or yarn:</p>
            <pre>
              <code>
                npm install react react-dom
              </code>
            </pre>
            <p>This installs React and ReactDOM packages, which are necessary for building React applications.</p>
          </section>
          <section id="section-3">
            <h2>Usage</h2>
            <p>To use React in your project, you need to import it into your JavaScript files:</p>
            <pre>
              <code>
                import React from 'react';<br/>
                import ReactDOM from 'react-dom';
              </code>
            </pre>
            <p>You can then start using React components in your application.</p>
          </section>
          <section id="section-4">
            <h2>Examples</h2>
            <div className="card mb-3">
              <img src={helloWorldImage} className="card-img-top" alt="Hello World Example" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Example 1: Hello World</h5>
                <p className="card-text">Render a simple "Hello, World!" message using a React component.</p>
              </div>
            </div>
            <div className="card mb-3">
              <img src={todoListImage} className="card-img-top" alt="Todo List Example" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Example 2: Todo List</h5>
                <p className="card-text">Create a basic todo list application with React components.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
