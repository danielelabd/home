import React, {} from "react";
import"../../css/Education.css";
import $ from 'jquery';

const Education = () => {
return (
<div id="education" class = "bck-white min-vh-100 m-0 d-flex align-content-center align-items-center flex-wrap">
    <div class="container container-fluid">
      <div class= "row align-content-center align-items-center">
        <div class="col-md-4 align-self-center">
          <h1 class= "hm">Education</h1>
          <p>My 4-years of education were shared between an undergraduate Bachelors of Engineering (BEng) degree in Mechainical Engineering at Cardiff University and a postgraduate Master’s in Science (MSc) degree in Engineering with Innovation and Entrepreneurship at University College London. Throughout my taught years I have gained significant knowledge and experience allowing me to grow and develop as an engineer. </p>
        </div>
        <div class = "col-md-8 align-self-center">
              <div class="card container">
                <div class="row">
                  <div class="col-md-4  align-self-top container"><img class = "image" src="https://images.squarespace-cdn.com/content/564b434ee4b0b5206c3a3cc6/1519757700437-AVZPW3WBDUUT164O3VJA/UCL-Logo-1.jpg?content-type=image%2Fjpeg"/></div>
                  <div class = "col-md-8 align-self-center container">
                <h2 class = "title">Engineering with Innovation and Entrepreneurship, Master’s in Science (MSc)</h2>
                <h3 class = "text">University College London - Distinction</h3>
                <ul class = "list">
                  <li>Materials and Fatigue	- 73%</li>
                  <li>Applications of Biomedical Engineering	- 81%</li>
                  <li>Mastering Entrepreneurship - 79%</li>
                  <li>Entrepreneurial finance	- 63%</li>
                  <li>Project Management- 74%</li>
                  <li>New and Renewable Energy Systems - 69%</li>
                  <li>Innovation and Group Design Project	- 68%</li>
                  <li>Individual Thesis - 82%</li>                  
                </ul>                
              </div>
            </div>
          </div>
          <div class="card container">
                <div class="row">
                  <div class="col-md-4 align-self-top container"><img class = "image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cardiff_University_%28logo%29.svg/1024px-Cardiff_University_%28logo%29.svg.png"/></div>
                  <div class = "col-md-8 align-self-center container">
                <h2 class = "title">Mechanical Engineering, Bachelor’s in Engineering (BEng)</h2>
                <h3 class = "text">Cardiff University - 1st Class Honours</h3>
                <ul class = "list">
                  <li>Throughout the 3-year course, I participated in key engineering modules such as fluid mechanics, solid mechanics, materials and fatigue, renewable energy systems, manufacturing systems and object orientated computing.</li>
                  <li>Year 1 - 65%</li>
                  <li>Year 2 - 77%</li>
                  <li>Year 3 - 70%</li>
                  <li>Individual Dissertation - 75%</li>              
                </ul>                
              </div>
            </div>
          </div>
            </div>
          </div>
       </div>
</div>
  );    
};

export default Education;
