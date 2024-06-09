import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/jquery.mCustomScrollbar.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css';

const Projects = () => {
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-xxl py-5" id="feature" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
        <div className="container py-5 px-lg-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5" style={{ fontSize: '60px', color: 'rgb(255, 255, 255)' }}>PROJECTS</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="feature-item bg-light rounded p-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-eye text-white fs-4"></i>
                </div>
                <h5 className="mb-3" style={{ fontSize: '23px' }}>Techblog</h5>
                <img src="../Yusuf-Portfolio02/images/techblog0.png" alt="Techblog" />
                <p className="m-0" style={{ fontSize: '18px' }}>A platform to share insights, updates and discussions about the latest trends and innovations in the world of technology.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="feature-item bg-light rounded p-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-layer-group text-white fs-4"></i>
                </div>
                <a href="https://project-3-aebd.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h5 className="mb-3" style={{ fontSize: '23px' }}>GameGrid Forum</h5>
                  <img src="../Yusuf-Portfolio02/images/gamegrid0.png" alt="GameGrid Forum" />
                  <p className="m-0" style={{ fontSize: '18px' }}>An online community dedicated to all things related to videogames. Whether you're a casual gamer, an avid player or a game developer, the forum provides a platform for enthusiasts to connect, share insights and discuss their favorite games.</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-item bg-light rounded p-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-edit text-white fs-4"></i>
                </div>
                <h5 className="mb-3" style={{ fontSize: '23px' }}>Concert Crashers</h5>
                <img src="../Yusuf-Portfolio02/images/concertcrashers.png" alt="Concert Crashers" />
                <p className="m-0" style={{ fontSize: '18px' }}>A website for music enthusiasts seeking comprehensive information on music concerts nationwide. The website offers a user-friendly platform to search for upcoming concerts, discover new artists, and stay updated on tour dates across various genres.</p>
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

export default Projects;
