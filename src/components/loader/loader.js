import React from 'react';
import './loader.css';


function Loader() {

    
  window.addEventListener ("load", function(){
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  });
  
  return (
   
    <div class="loader">
    <div class="sk-cube-grid">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>
  </div>

  
  );
}

export default Loader

