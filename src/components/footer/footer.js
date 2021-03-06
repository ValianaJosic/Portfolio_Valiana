import React from 'react';
import './footer.css';


function Footer() {
  return (
    <div className="footer">
      <div>
        <p className="email">valiana.josic@gmail.com</p>
      </div>
      <div className="icon-bar">
        <a href="https://www.linkedin.com/in/valiana-josic/" target="_blank" rel="noopener  noreferrer" className="linkedin"><i className="fa fa-linkedin"></i></a>
      </div>
      <div className="icon-bar git"><a href="https://github.com/ValianaJosic" target="_blank" rel="noopener  noreferrer" className="nav-name">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a></div>

    </div>
  );
}

export default Footer