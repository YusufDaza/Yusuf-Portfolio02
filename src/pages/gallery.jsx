import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/jquery.mCustomScrollbar.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css';

const AIGallery = () => {
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

      {/* Feature Section */}
      <section className="container-xl py-1" id="feature" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-5" style={{ fontSize: '60px', color: 'rgb(255, 255, 255)' }}>PROJECTS</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="about_section">
        <div className="container-fluid">
          <div className="row">
            <h1 className="long_text" style={{ fontSize: '18px' }}>
              **This bio will be updated periodically based on my experiences**
            </h1>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section>
        <div className="slider">
          <img id="img-1" src="../Yusuf-Portfolio02/images/image12.png" alt="description" />
          <img id="img-2" src="../Yusuf-Portfolio02/images/image06.jpg" alt="description" />
          <img id="img-3" src="../Yusuf-Portfolio02/images/image07.jpg" alt="description" />
          <img id="img-4" src="../Yusuf-Portfolio02/images/image08.png" alt="description" />
          <img id="img-5" src="../Yusuf-Portfolio02/images/image09.png" alt="description" />
          <img id="img-6" src="../Yusuf-Portfolio02/images/image10.png" alt="description" />
          <img id="img-7" src="../Yusuf-Portfolio02/images/image11.png" alt="description" />
          <img id="img-8" src="../Yusuf-Portfolio02/images/image05.jpg" alt="description" />
          <img id="img-9" src="../Yusuf-Portfolio02/images/image13.jpg" alt="description" />
          <img id="img-10" src="../Yusuf-Portfolio02/images/image14.jpg" alt="description" />
          <img id="img-11" src="../Yusuf-Portfolio02/images/image15.jpg" alt="description" />
          <img id="img-12" src="../Yusuf-Portfolio02/images/image16.png" alt="description" />
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

export default AIGallery;
