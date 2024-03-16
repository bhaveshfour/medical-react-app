import './css/bootstrap.min.css';
import './css/nice-select.css';
import './css/font-awesome.min.css';
import './css/icofont.css';
import './css/slicknav.min.css';
import './css/owl-carousel.css';
import './css/datepicker.css';
import './css/animate.min.css';
import './css/magnific-popup.css';
import './css/normalize.css';
import './css/style.css';
import './css/responsive.css';
import logo from './img/logo.png';

function App() {
  return (
    <>
      {/* <div className="preloader">
        <div className="loader">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>

          Here

          <div className="indicator">
            <svg width="16px" height="12px">
              <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
              <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div> */}

      <ul className="pro-features">
        <a className="get-pro" href="#">Get Pro</a>
        <li className="big-title">Pro Version Available on Themeforest</li>
        <li className="title">Pro Version Features</li>
        <li>2+ premade home pages</li>
        <li>20+ html pages</li>
        <li>Color Plate With 12+ Colors</li>
        <li>Sticky Header / Sticky Filters</li>
        <li>Working Contact Form With Google Map</li>
        <div className="button">
          <a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" class="btn">Pro Version Demo</a>
          <a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" class="btn">Buy Pro Version</a>
        </div>
      </ul>

      <header class="header" >

        <div class="topbar">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-5 col-12">

                <ul class="top-link">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>

              </div>
              <div class="col-lg-6 col-md-7 col-12">

                <ul class="top-contact">
                  <li><i class="fa fa-phone"></i>+880 1234 56789</li>
                  <li><i class="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div class="header-inner">
          <div class="container">
            <div class="inner">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-12">

                  <div class="logo">
                    <a href="index.html"><img src={logo} alt="#"/></a>
                  </div>


                  <div class="mobile-nav"></div>

                </div>
                <div class="col-lg-7 col-md-9 col-12">

                  <div class="main-menu">
                    <nav class="navigation">
                      <ul class="nav menu">
                        <li class="active"><a href="#">Home <i class="icofont-rounded-down"></i></a>
                          <ul class="dropdown">
                            <li><a href="index.html">Home Page 1</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Doctos </a></li>
                        <li><a href="#">Services </a></li>
                        <li><a href="#">Pages <i class="icofont-rounded-down"></i></a>
                          <ul class="dropdown">
                            <li><a href="404.html">404 Error</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Blogs <i class="icofont-rounded-down"></i></a>
                          <ul class="dropdown">
                            <li><a href="blog-single.html">Blog Details</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </nav>
                  </div>

                </div>
                <div class="col-lg-2 col-12">
                  <div class="get-quote">
                    <a href="appointment.html" class="btn">Book Appointment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}

export default App;
