import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Create a navbar component
const Navbar = () => {
    return (
        
<nav class="navbar navbar-expand-lg shadow-5-strong border border-black border-bottom-3">
  <div class="container-fluid">
    

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      <li class="nav-item me-3">
          <a class="nav-link active" aria-current="page" href="#section1">About Us</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" aria-current="page" href="#section2">Policy</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" href="#section3">Go Premium</a>
        </li>
        <li class="nav-item me-3">
          <a
            class="nav-link"
            href="#section4"
            role="button"
          >
            For Tutors
          </a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        
    );
};

// Create a landing page component
const LandingPage = () => {
    const [showSmallText, setShowSmallText] = useState(false);
  
    useEffect(() => {
      const firstViewTextElement = document.querySelector('.first-view-text');
  
      const handleAnimationEnd = () => {
        setShowSmallText(true);
      };
  
      if (firstViewTextElement) {
        firstViewTextElement.addEventListener('animationend', handleAnimationEnd);
  
        return () => {
          firstViewTextElement.removeEventListener('animationend', handleAnimationEnd);
        };
      }
    }, []); // Empty dependency array ensures that this effect runs once after the initial render
  
    return (
      <div className="landing-page">
        <div className='first-view d-flex flex-column justify-content-center align-items-center'>
          <Navbar />
            
          <div className="first-view-container d-flex mx-auto">
            <div className='stationary'>
            <img className='pencil ' src="https://cdn.discordapp.com/attachments/1170293654896787498/1197858476588793948/pencil.png?ex=65bccba3&is=65aa56a3&hm=dd8703962f41e6ac15ee0c8d8415e0da89f93634335717ea5d061298f7b5169b&" alt="" />

            </div>
            
            <div className='linearly d-flex'>

            <div className='stationary '>
            <img className='scribbly1' src="https://cdn.discordapp.com/attachments/1170293654896787498/1197880920561160192/Scribblyy.png?ex=65bce08b&is=65aa6b8b&hm=3c346ac20131347a6c595f315c2809483dbb3807a5520b59fbb7d70285022079&" alt="" srcset="" />

            </div>
            <div className='textstuff mx-auto my-auto'>

          <div className='first-view-text'> EMF </div>
          {showSmallText && <div className='first-view-text-small'>Education Meets Fun</div>}
          <Link className='text-decoration-none' to='/ChatWindow'>
          <div className='start-quiz'><div className='border border-dark border-5 rounded-pill px-2'>Start Your Quiz</div></div></Link>
          </div>
            <div className='stationary'>
            <img className='scribbly2' src="https://cdn.discordapp.com/attachments/1170293654896787498/1197880920561160192/Scribblyy.png?ex=65bce08b&is=65aa6b8b&hm=3c346ac20131347a6c595f315c2809483dbb3807a5520b59fbb7d70285022079&" alt="" srcset="" />

            </div>

            </div>
            <div className='stationary'>
            <img className='bulb' src="https://cdn.discordapp.com/attachments/1170293654896787498/1197859998257123328/lightbulb-icon-png-icon-transparent-light-bulb-png-237x300-removebg-preview.png?ex=65bccd0e&is=65aa580e&hm=e6573fa5c751fea1fc4eaf63e31adad2c1653056090f1f610311da59df8e974f&" alt="" />
            </div>
            </div>

            

        </div>
        <div id="section1">
            <div className="d-flex align-items-center mx-auto">
              <div className='Mandala'>

              <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1197881967497195600/WhatsApp_Image_2024-01-19_at_17.58.11_4acfc064-removebg-preview.png?ex=65bce184&is=65aa6c84&hm=91ca55bca32015b1e8e9c3d74ed4cb677d9b6d67f921d5366b6ea5f23ebab2c4&" alt="" />
              </div>
        <div className='d-flex flex-column justify-content-center'>
        <div className='AboutText'>
          About Us
        </div>
        <div className='abfoot mx-auto'>
        <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1197881548096147466/WhatsApp_Image_2024-01-19_at_17.57.42_0e20c2ab-removebg-preview.png?ex=65bce120&is=65aa6c20&hm=34017575b9ac9e2f5378a7fc71f0daf24fcfb013f2771b4e9a7b545bceee57c1&" alt="" />
        </div>
        <div className='AboutTextSub'>
        Welcome to EMF – where education meets innovation! Dive into personalized quizzes, earn points, and join a community of like-minded learners. Redefine learning at EMF – your educational journey, uniquely yours!
        </div>
        
        </div>
</div>
</div>
        <div id="section2">
        <div className="d-flex align-items-center mx-auto">
        <div className='HeaderPolicy d-flex justify-content-center flex-column'>
          <img className='daag' src="https://cdn.discordapp.com/attachments/1169346758636224614/1197882245298540685/WhatsApp_Image_2024-01-19_at_17.59.20_e00e337d-removebg-preview.png?ex=65bce1c6&is=65aa6cc6&hm=3364ae21cf9f3d4c5579294d226f7defdee05eb194bb14351888b2a93cf2cd63&" alt="" />
          <div className='PolicyHead'>Policy</div>
          <div className='PointsPencils d-flex flex-column'>

          <div className='policypencil'>
            <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1197882535582105610/WhatsApp_Image_2024-01-19_at_17.59.41_143d82a9-removebg-preview.png?ex=65bce20c&is=65aa6d0c&hm=0e88ee792534f7e3ffe875d14c789dba563177f09557b7b80b5b5a514506f0fe&" alt="" />
          </div>
          <div className='policypencil'>
            <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1197882535582105610/WhatsApp_Image_2024-01-19_at_17.59.41_143d82a9-removebg-preview.png?ex=65bce20c&is=65aa6d0c&hm=0e88ee792534f7e3ffe875d14c789dba563177f09557b7b80b5b5a514506f0fe&" alt="" />
          </div>
          <div className='policypencil'>
            <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1197882535582105610/WhatsApp_Image_2024-01-19_at_17.59.41_143d82a9-removebg-preview.png?ex=65bce20c&is=65aa6d0c&hm=0e88ee792534f7e3ffe875d14c789dba563177f09557b7b80b5b5a514506f0fe&" alt="" />
          </div>
          </div>
        </div>
</div>
        </div>
        <div id="section3"></div>
        <div id="section4"></div>
      </div>
    );
  };
  
  export default LandingPage;