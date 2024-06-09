import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/jquery.mCustomScrollbar.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css';

const Contact = () => {
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

      {/* Contact Section */}
      <section className="contact_section contact_main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 padding_0">
              <div className="contact_bg">
                <div className="input_main">
                  <div className="container">
                    <h2 className="request_text" style={{ fontSize: '35px' }}>CONTACT ME, I DON'T BITE! :)</h2>
                    <form action="/action_page.php">
                      <div className="form-group">
                        <img src="../Yusuf-Portfolio02/images/email-icon.png" alt="description" width="90" height="90" />
                        <a href="mailto:josephdazz@hotmail.com" style={{ fontSize: '26px' }}>Email</a>
                      </div>
                      <div className="form-group">
                        <img src="../Yusuf-Portfolio02/images/github-icon.png" alt="description" width="90" height="90" />
                        <a href="https://github.com/YusufDaza" style={{ fontSize: '26px' }}>GitHub</a>
                      </div>
                      <div className="form-group">
                        <img src="../Yusuf-Portfolio02/images/linkedin-icon.png" alt="description" width="90" height="90" />
                        <a href="https://www.linkedin.com/in/jose-daza-223924311/" style={{ fontSize: '26px' }}>LinkedIn</a>
                      </div>
                    </form>
                  </div>
                </div>                
              </div>
            </div>
            <div className="col-md-6 padding_0">
              {/* Empty Column */}
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

export default Contact;
