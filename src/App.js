import React from 'react'
import { Link } from 'react-router-dom';
import iphone from './images/iphone6.png'
import dog from './images/dog-img.jpg'
import tc from './images/TechCrunch.png'
import tnw from './images/tnw.png'
import biz from './images/bizinsider.png'
import mashable from './images/mashable.png'
import lady from './images/lady-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faDiscord, faGithub, faGooglePlay, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBullseye, faCheckCircle, faDog, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="App">
      {/* Title section */}
      <section id="title" className="title">
        <div className="container-fluid">
          {/* <!-- Nav Bar --> */}
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark ">
              <div className="container">
                <Link className="brandName" to="/Home"><FontAwesomeIcon icon={faDog} /> DogCare</Link>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav">
                  <li>
                    <Link className="navlink" to="/#Home">Home</Link>
                  </li>
                  <li>
                    <Link className="navlink" to="/#features">Features</Link>
                  </li>
                  <li>
                    <Link className="navlink" to="/#testimonials">Testimonials</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          {/* <!-- Title section--> */}
          <div className="row">
            <div className="col-lg-8">
              <h1 >Meet new and interesting dogs nearby.</h1>
              <button type="button" className="btn btn-outline-secondary btn-lg"><FontAwesomeIcon icon={faApple} />Download</button>

              <button type="button" className="btn btn-outline-secondary btn-lg"><FontAwesomeIcon icon={faGooglePlay} />Download</button>

            </div>
            <div className="col-lg-4">
              <img className="title-Image" src={iphone} alt="iphone-mockup" />
            </div>
          </div>
        </div>
      </section >

      {/* Features section*/}
      <section id="features" className="features">
        <div className="container-fluid row">
          <div className="col-lg-4 ">
            <FontAwesomeIcon className="icon" icon={faCheckCircle} size="2x" />
            <h3>Easy to use.</h3>
            <p>So easy to use, even your Dog could do it.</p>
          </div>
          <div className="col-lg-4 ">
            <FontAwesomeIcon className="icon" icon={faBullseye} size="2x" />
            <h3>Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>
          </div>
          <div className="col-lg-4 ">
            <FontAwesomeIcon className="icon" icon={faHeart} size="2x" />
            <h3>Guaranteed to work.</h3>
            <p>Find the love of your dog's life or your money back.</p>
          </div>
        </div>
      </section>

      {/* Testimonials section*/}
      <section id="testimonials" className="carousel slide" data-bs-ride="carousel" data-interval="5000" data-pause="hover">
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#testimonials" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#testimonials" data-bs-slide-to="1"></button>
        </div>
        <div className="carousel-inner row container-fluid">
          <div className="carousel-item active col-lg-3 col-md-6 col-sm-12">
            <h2 className="testimonial-text">I no longer have to sniff other dogs for love.I've found the hottest Corgi on TinDog. Woof.</h2>
            <img className="testimonial-image" src={dog} alt="dog-profile" />
            <div><em>Pebbles, New York</em></div>
          </div>

          <div className="carousel-item col-lg-3 col-md-6 col-sm-12">
            <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life.I think.</h2>
            <img className="testimonial-image" src={lady} alt="lady-profile" />
            <div><em>Beverly, Illinois</em></div>
          </div>
        </div>
      </section >

      {/* Press section*/}
      <section section id="press" className="press " >
        <div className="container-fluid row">
          <div className="col-lg-3 col-md-6 col-sm-12"><img src={tc} alt="tc-logo" /></div>
          <div className="col-lg-3 col-md-6 col-sm-12"><img src={tnw} alt="tnw-logo" /></div>
          <div className="col-lg-3 col-md-6 col-sm-12"><img src={biz} alt="biz-insider-logo" /></div>
          <div className="col-lg-3 col-md-6 col-sm-12"><img src={mashable} alt="mashable-logo" /></div>
        </div>
      </section >

      {/* Pricing  section */}
      <section className="pricing">
        <div className="container-fluid bg-gradient p-5">
          <div className="row m-auto text-center w-75">

            <div className="plansHeader">
              <h2>A Plan for Every Dog's Needs</h2>
              <p>Simple and affordable price plans for you and your dog.</p>
            </div>

            <div className="col-lg-4 col-md-6 pricing-item red">
              <div className="pricing-divider ">
                <h3 className="text-light">Chihuahua</h3>
                <h4 className="my-0 display-4 text-light font-weight-normal mb-3">Free</h4>
                <svg className='pricing-divider-img' enableBackground='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
                  <path className='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
                  <path className='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
                  <path className='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
                  <path className='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
                </svg>
              </div>
              <div className="card-body bg-white mt-0 shadow">
                <ul className="list-unstyled mb-5 position-relative">
                  <li><b>5</b> Matches Per Day</li>
                  <li><b>10</b> Messages Per Day</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block  btn-custom ">Sign up for free</button>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 pricing-item red">
              <div className="pricing-divider ">
                <h3 className="text-light">Labrador</h3>
                <h4 className="my-0 display-4 text-light font-weight-normal mb-3"><span className="h3">$</span> 49 <span className="h5">/mo</span></h4>
                <svg className='pricing-divider-img' enableBackground='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
                  <path className='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
                  <path className='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
                  <path className='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
                  <path className='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
                </svg>
              </div>
              <div className="card-body bg-white mt-0 shadow">
                <ul className="list-unstyled mb-5 position-relative">
                  <li>Unlimited Matches</li>
                  <li>Unlimited Messages</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block  btn-custom ">Sign up for free</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 pricing-item red">
              <div className="pricing-divider ">
                <h3 className="text-light">Mastiff</h3>
                <h4 className="my-0 display-4 text-light font-weight-normal mb-3"><span className="h3">$</span> 99 <span className="h5">/mo</span></h4>
                <svg className='pricing-divider-img' enableBackground='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
                  <path className='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
                  <path className='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
                  <path className='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
                  <path className='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
                </svg>
              </div>
              <div className="card-body bg-white mt-0 shadow">
                <ul className="list-unstyled mb-5 position-relative">
                  <li>Unlimited Matches</li>
                  <li>Unlimited Messages</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block  btn-custom ">Sign up for free</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA section*/}
      <section section id="cta" className="cta" >

        <div className="container-fluid">
          <h3>Find the True Love of Your Dog's Life Today.</h3>
          <button type="button" className="btn btn-outline-secondary"><FontAwesomeIcon icon={faApple} /> Download</button>
          <button type="button" className="btn btn-outline-secondary"><FontAwesomeIcon icon={faGooglePlay} /> Download</button>
        </div>
      </section >

      {/* Footer section*/}
      <section footer id="footer" className="footer" >
        <div className="social-icons container-fluid">
          <FontAwesomeIcon className="icon-style" icon={faTwitter} />
          <FontAwesomeIcon className="icon-style" icon={faLinkedin} />+
          <FontAwesomeIcon className="icon-style" icon={faGithub} />
          <FontAwesomeIcon className="icon-style" icon={faDiscord} />
          <FontAwesomeIcon className="icon-style" icon={faEnvelope} />
        </div>

        <p>© Copyright 2021 <em>DogCare</em></p>

      </section >
    </div >
  )
}

export default App;

