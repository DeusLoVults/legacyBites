import React, { useState } from "react";

import { Helmet } from "react-helmet";

import ReviewCard from "../components/review-card";
import VCards from "../components/v-cards.js";
import ReviewFormDialog from "../components/ReviewFormDialog";
import "./home.css";

const AllReviews = () => {
  const reviews = require("../data/reviews.json");
  return (
      <li className="home-li list-item">
        {reviews.data.map((review, index) => (
            <ReviewCard key={index} indx={index} />
        ))}
      </li>
  );
};

const Home = (props) => {
  localStorage.setItem("already_reviewed", 0);
  const reviewData = require("../data/reviews.json");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState(0);

  console.log(name, message, stars);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmitReview = (x) => {
    if (!x.name || !x.message || !x.stars) {
      alert("Please fill in all fields");
      return;
    }

    if (localStorage.getItem("already_reviewed") === 1) {
      alert("You have already submitted a review. Thank you!");
      return;
    }

    const newReview = {
      name: x.name,
      date: new Date().toLocaleDateString("en-US"),
      stars: x.stars,
      text: x.message,
    };

    reviewData.data.push(newReview);

    setName("");
    setMessage("");
    setStars(0);
    setDialogOpen(false);

    localStorage.setItem("already_reviewed", 1);
  };

  const [vbanner, setVBanner] = useState(0);

  function onRightClick() {
    if (vbanner === Object.keys(reviewData.data).length - 3) return;
    setVBanner(vbanner + 1);
  }

  function onLeftClick() {
    if (vbanner === 0) return;
    setVBanner(vbanner - 1);
  }

  return (
      <div className="home-container">
        <Helmet>
          <title>Portfolio Page</title>
          <meta property="og:title" content="Portfolio Page" />
        </Helmet>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <span className="home-heading1">LEGACY BITE</span>
            <div className="home-links-container">
              <span className="home-link Navbar-Link">209-999-9999</span>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-container1">
                <span className="Card-Heading home-heading2">Logo</span>
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container1">
                <span className="home-link1 Navbar-Link">About</span>
                <span className="home-link2 Navbar-Link">Experience</span>
                <span className="home-link3 Navbar-Link">Portofolio</span>
                <span className="Navbar-Link">Contact</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div className="home-section-separator1"></div>
        <div className="home-container2">
          <div className="home-hero">
            <div className="home-hero-text-container">
              <h1 className="home-heading3">   MOHOMMAD SALAH</h1>
              <span className="home-text Card-Text">
                        Vending Machine Owner
            </span>
              <span className="home-text01 Section-Text">
              <span className="home-text02">c.</span>
              <span>
                This is my vending machine store yad asdasd asdff asodi
                fhjpasdoi yfup9asd yhfpas9dyh fp9asdo8yhf p9asoidyh fp9asd8yhf
                p9asd8y fp9as8dy f9pasdyf p9as8dy hfp9asdo8yhf p9as8dyfp9sad8
                yfp9as8d yhf9p8asdyhf 9pas8dyhfp98asdyfs ayu9fasd9p8yfasd9p8yf
                sad9 fs9adp8y fspa98dfy
              </span>
            </span>
              <div className="home-cta-btn-container">
                <button className="home-cta-btn Anchor button">
                <span className="home-text04">
                  <span
      onClick={()=>{window.location.href="#products"}}
                  >
                    PRODUCTS
                  </span>
                  <br></br>
                </span>
                </button>
                <button
                    className="home-cta-btn1 Anchor button"
                    onClick={()=>{window.location.href="#socials"}}
                >
                  SOCIALS
                </button>
              </div>
            </div>
            <img
                alt=""
                src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-man-in-mexico-national-costume-png-image_10026359.png"
                className="home-image"
            />
          </div>
        </div>
        <div id="products" className="home-features">
          <button
              type="button"
              className="home-button button"
              onClick={onLeftClick}
          >
            &lt;
          </button>
          <button
              type="button"
              className="home-button1 button"
              onClick={onRightClick}
          >
            &gt;
          </button>
          <div className="home-heading-container">
            <h2 className="Section-Heading home-text07">Our Vending Machines</h2>
          </div>
          <span className="home-text08 Section-Text">Top Selling</span>
          <div className="home-cards-container">
            <VCards indx={vbanner} />
          </div>
        </div>
        <div className="home-about">
          <h1 className="home-text14 Section-Heading">Reviews</h1>
          <button
              type="button"
              className="home-button2 button"
              onClick={handleOpenDialog}
          >
            Write a review
          </button>
          <ReviewFormDialog
              open={dialogOpen}
              onClose={handleCloseDialog}
              onSubmit={handleSubmitReview}
          />
          <div className="home-max-content-width-container">
            <div className="home-container4">
              <ul className="home-ul list">{AllReviews()}</ul>
              <div className="home-content-container"></div>
            </div>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-section-separator3"></div>
        <div className="home-section-separator4"></div>
        <div className="home-faqs">
          <h2 className="home-text15 Section-Heading">FAQ</h2>
          <div className="home-content-container1">
            <div className="home-faq">
              <div className="home-question-container">
              <span className="home-question">
                How do I purchase items from the vending machines?
              </span>
              </div>
              <div className="home-answer-container">
                <span className="home-answer Card-Text">Select Your Item:</span>
                <span className="Card-Text">
                Choose the product you'd like to purchase by pressing the
                corresponding button on the vending machine's keypad.
              </span>
              </div>
            </div>
          </div>
          <div className="home-content-container1">
            <div className="home-faq">
              <div className="home-question-container">
              <span className="home-question">
                What payment methods are accepted at the vending machines?
              </span>
              </div>
              <div className="home-answer-container">
                <span className="home-answer Card-Text">Payment Method:</span>
                <span className="Card-Text">
                Insert the required amount of coins or bills into the cash slot,
                or use a cashless payment method such as credit or debit card,
                mobile payment, or contactless payment.
              </span>
              </div>
            </div>
          </div>
          <div className="home-content-container1">
            <div className="home-faq">
              <div className="home-question-container">
              <span className="home-question">
                Are the vending machines equipped to handle cashless payments?
              </span>
              </div>
              <div className="home-answer-container">
                <span className="home-answer Card-Text">Retrieve Your Item:</span>
                <span className="Card-Text">
                Once the payment is processed, the vending machine will dispense
                your selected item. Be sure to collect your item from the
                dispensing slot.
              </span>
              </div>
            </div>
          </div>
          <div className="home-content-container1">
            <div className="home-faq">
              <div className="home-question-container">
              <span className="home-question">
                How often are the vending machines restocked with fresh
                products?
              </span>
              </div>
              <div className="home-answer-container">
              <span className="home-answer Card-Text">
                Enjoy Your Purchase:
              </span>
                <span className="Card-Text">
                Enjoy your snack or beverage from our vending machines!
              </span>
              </div>
            </div>
          </div>

          <div className="home-content-container1">
            <div className="home-faq">
              <div className="home-question-container">
              <span className="home-question">
                How do I report a problem with a vending machine, such as a
                malfunction or a product not being dispensed?
              </span>
              </div>
              <div className="home-answer-container">
                <span className="home-answer Card-Text">Report the Issue:</span>
                <span className="Card-Text">
                Contact our customer support team using the provided contact
                information. Be prepared to provide details about the location
                of the vending machine, the nature of the problem, and any
                relevant information to help us address the issue promptly.
              </span>
              </div>
            </div>
          </div>

          <div className="home-content-container1">
            <div className="home-faq">
              <div className="home-question-container">
              <span className="home-question">
                How do I contact customer support for any inquiries or feedback
                related to the vending machines?
              </span>
              </div>
              <div className="home-answer-container">
              <span className="home-answer Card-Text">
                Alternative Contact:
              </span>
                <span className="Card-Text">
                If you are unable to reach customer support through the contact
                information on the vending machine, you can also reach out to us
                through our website or customer service hotline.
              </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator5"></div>
        <div className="home-subscribe">
          <div class="form-container">
            <form class="form">
              <div class="form-group">
                <label for="text">Full Name</label>
                <input type="text" id="Full Name" name="email" required="" />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="phone" id="email" name="email" required="" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" required="" />
              </div>
              <div class="form-group">
                <label for="textarea">How Can We Help You?</label>
                <textarea
                    name="textarea"
                    id="textarea"
                    rows="10"
                    cols="50"
                    required=""
                >
                {" "}
              </textarea>
              </div>
              <button class="form-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="home-container6">
            <div className="home-heading-container1">
              <h1 className="home-text16 Section-Heading">Become Notified!</h1>
              <span className="Section-Text home-text17">
              We will send you notifications whenever we add new vending
              machines!
            </span>
            </div>
            <input
                type="text"
                required="true"
                placeholder="E-mail"
                className="home-textinput5 Section-Text input"
            />
            <button className="home-button4 Anchor button">SEND</button>
          </div>
        </div>
        <div className="home-section-separator6"></div>
        <div id="socials" className="home-footer-container">
          <div className="home-footer">
            <div className="home-social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="home-copyright-container">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="Anchor">Copyright, 2024</span>
            </div>
          </div>
        </div>
        <div className="home-testimonial"></div>
      </div>
  );
};

export default Home;
