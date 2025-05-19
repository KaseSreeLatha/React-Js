import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling
import backgroundImage from './background.jpg'; // Import your background image

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <h1>Create REACT Projects</h1>
          <p>React is a powerful JavaScript library for building user interfaces. It's widely used in web 
            development to create interactive and dynamic web applications.</p>
          <Link to="/register" className="btn btn-primary">Get Started</Link>
        </div>
      </section><br></br>
      <h1>Features of REACT:</h1>
      <section className="features">
        <div className="feature">
          <i className="fas fa-chart-line"></i>
          <h2>React Hooks</h2>
          <p>React Hooks are functions that allow developers to add state and other React features to functional components.
             Hooks provide a more concise and flexible way to manage state and side effects within functional components.

</p>
        </div>
        <div className="feature">
          <i className="fas fa-users"></i>
          <h2>Virtual DOM</h2>
          <p>With React's virtual DOM, developers can create dynamic and responsive user interfaces 
            that update efficiently in response to user interactions and data changes. By minimizing DOM manipulations.</p>
        </div>

        <div className="feature">
          <i className="fas fa-users"></i>
          <h2>Unidirectional Data Flow</h2>
          <p>React follows a unidirectional data flow, where data flows in a single direction from parent to child components. This helps maintain a clear and predictable data flow within the application, making it easier to understand and debug.</p>
        </div>


        <div className="feature">
          <i className="fas fa-cogs"></i>
          <h2>JSX (JavaScript XML)</h2>
          <p>React's JSX syntax makes it easier for developers to build UI components by combining HTML-like markup with JavaScript logic. 
            This declarative approach to UI development enhances readability and maintainability.</p>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to Grow Your Performance on React?</h2>
        <p>"Embrace the power of React and unlock limitless possibilities to craft stunning 
          <br></br>and dynamic web projects that captivate and engage users like never before."</p>
        <Link to="/register" className="btn btn-secondary">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default Home;
