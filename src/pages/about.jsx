import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/jquery.mCustomScrollbar.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <a href="index.html">
                  <img src="images/adclogo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="menu_text">
                <ul>
                  <li><a href="index.html" style={{ fontSize: '23px' }}>HOME</a></li>
                  <li><a href="about.html" style={{ fontSize: '23px' }}>ABOUT</a></li>
                  <li><a href="projects.html" style={{ fontSize: '23px' }}>PROJECTS</a></li>
                  <li><a href="gallery.html" style={{ fontSize: '23px' }}>AI GALLERY</a></li>
                  <li><a href="contact.html" style={{ fontSize: '23px' }}>CONTACT ME</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about_section">
        <div className="container-fluid">
          <div className="row">
            <h1 className="long_text" style={{ fontSize: '18px' }}>
              **This bio will be updated periodically based on my experiences**
            </h1>
            <div className="col-md-6">
              <div className="about_taital">
                <h1 className="about_text">ABOUT YUSUF</h1>
                <p className="long_text" style={{ fontSize: '22px' }}>
                  Born in Colombia. Since childhood I've been passionate about art and animation. In December 2023, I enrolled in a coding bootcamp at the University of Miami. Initially nervous, soon I found myself enjoying the process and realized the potential of combining basic coding with visual arts. I'm always open to learn new things and skills!
                </p>
                <p className="long_text" style={{ fontSize: '22px' }}>
                  As a Junior Coder, I developed skills in HTML, CSS, JavaScript, React, Node.js. Also I have skills using Midjourney AI and Stable Diffusion for visual arts. As a result I can create engaging and visually aesthetics web experiences. I bring unique perspective to my work by merging artistic creativity with technical proficiency to deliver innovative solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 padding_0">
              <div className="about_img">
                <img src="images/image03.png" alt="About Yusuf" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section"></footer>

      {/* Copyright Section */}
      <div className="copyright_section">
        <p className="copyright_text">Copyright 2024 All Right Reserved</p>
      </div>
    </div>
  );
};

export default About;
