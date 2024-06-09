import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/jquery.mCustomScrollbar.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css';

const Portfolio = () => {
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

      {/* Banner Section */}
      <section className="banner_section">
        <div className="container-fluid">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-2">
                    <div className="round">
                      <img src="images/round-icon.png" alt="Round Icon" />
                    </div>
                    <p className="number_text"></p>
                    <div className="line">
                      <img src="images/line.png" alt="Line" />
                    </div>
                    <p className="number_text"></p>
                    <div className="round">
                      <img src="images/round-icon.png" alt="Round Icon" />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="taital_main">
                      <h2 className="construction_text">Hello!</h2>
                      <h1 className="building_text">I'm Yusuf</h1>
                      <p className="lorem_text" style={{ fontSize: '20px' }}>
                        I'm a Junior Coder from Miami/FL, with a love for art and coding. I recently completed a coding bootcamp where I developed skills in HTML, CSS, JavaScript. I enjoy creating visually aesthetics and appealing websites. Feel free to check my portfolio!
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div>
                      <img src="images/yusuf0.jpg" alt="Yusuf" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="social_icon"></div>
      </footer>

      {/* Copyright Section */}
      <div className="copyright_section">
        <p className="copyright_text">Copyright 2024 All Right Reserved</p>
      </div>
    </div>
  );
};

export default Portfolio;
