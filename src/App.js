import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className = "App">
        <header className = "App-header">
          <h1>Welcome to Vicky's World</h1>
          <p>Explore my projects!</p>
          <nav>
            <Link to="/">Home</Link> | <Link to="/projects/1">Project Details (Example)</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path = "/" element = {<Projects />} />
            <Route path = "/projects/:id" element = {<ProjectDetails />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}
export default App;


