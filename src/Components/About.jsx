import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import animationData1 from "../assets/Animation - 1718170481820 (1).json";
import "../About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`About ${isVisible ? "fade-in" : ""}`}>
      <div className={`section-3 ${isVisible ? "fade-in" : ""}`}>
        <div className="section-3-content">
          <h1>
            About <span style={{ color: "yellow" }}>No-bg</span>
          </h1>
          <p>
            No-bg is your ultimate solution for removing backgrounds from images
            effortlessly. Whether you need to create transparent backgrounds for
            product photos, graphic designs, programming, photographer,
            e-commerce seller, social media graphics, personal projects or just
            someone looking to enhance their photos, No-bg makes the process
            simple and quick.
          </p>
          <p>
            With our advanced background removal technology, you can achieve
            clean and professional results in just a few clicks. No more tedious
            manual editing, just upload your image, and let No-bg do the rest.
          </p>
        </div>
        <div className="bg">
          <Lottie animationData={animationData1} />
        </div>

      </div>
      <div className="what-we-offer">
        <h1>What We <span style={{color: 'yellow'}}>Offer</span></h1>
        <div>
          <h2>Effortless Background Removal:</h2>
          <p>
            At No-bg, we specialize in removing unwanted backgrounds from your
            images with precision and ease. Our advanced technology ensures that
            your subject is perfectly isolated from the background, providing
            you with a clean and transparent image. No more spending hours
            manually cutting out backgrounds, No-bg does it all for you in
            seconds.
          </p>
        </div>

        <div>
          <h2>Add Background Colors:</h2>
          <p>
            Not only do we remove backgrounds, but we also give you the option
            to add a new background color to your images. Whether you need a
            solid color background for a product shot, a specific color to match
            your brand identity, or just want to experiment with different
            looks, No-bg makes it easy to customize your images to your liking.
          </p>
        </div>
      </div>

      <div className="how-it-works">
        <h1>How It <span style={{color: 'yellow'}}>Works</span></h1>
        <p>
          Using No-bg is simple and user-friendly. Here's a quick rundown of how
          you can transform your images:
        </p>

        <div>
          <h2>Upload Your Image:</h2>
          <p>
            Start by uploading the image you want to edit. No-bg supports a
            variety of image formats, making it convenient for you to use images
            from any source.
          </p>
        </div>

        <div>
          <h2>Remove the Background:</h2>
          <p>
            With just a click, our powerful AI-driven tool will remove the
            background from your image, leaving you with a clean, transparent
            result.
          </p>
        </div>

        <div>
          <h2>Add a Background Color (Optional):</h2>
          <p>
            If you wish to add a background color, simply choose from a wide
            range of colors, or input a specific color code. The new background
            will be applied seamlessly, ensuring a professional look.
          </p>
        </div>

        <div>
          <h2>Download Your Image:</h2>
          <p>
            Once you're satisfied with the results, download your edited image
            in high quality. You can use the image immediately for your
            projects, social media, e-commerce listings, and more.
          </p>
        </div>
      </div>

      <div className="why-choose-no-bg">
        <h1>Why Choose <span style={{color: 'yellow'}}>No-bg</span>?</h1>

        <div>
          <h2>Speed and Efficiency:</h2>
          <p>
            No-bg is designed to save you time. Our automated background removal
            process is incredibly fast, allowing you to get your edited images
            in seconds. Spend less time editing and more time focusing on what
            you do best.
          </p>
        </div>

        <div>
          <h2>High-Quality Results:</h2>
          <p>
            We pride ourselves on delivering top-notch quality. Our advanced
            algorithms ensure that the edges of your subject are crisp and
            clean, even for complex images with intricate details.
          </p>
        </div>

        <div>
          <h2>User-Friendly Interface:</h2>
          <p>
            No-bg is built with ease of use in mind. You don't need to be a tech
            expert or have advanced photo editing skills to use our service. Our
            intuitive interface makes it accessible for everyone.
          </p>
        </div>

        <div>
          <h2>Versatility:</h2>
          <p>
            Whether you need transparent backgrounds for your website, product
            photos for your online store, or creative images for your social
            media, No-bg has got you covered. Our versatile tool caters to a
            wide range of applications.
          </p>
        </div>

        <div>
          <h2>Secure and Private:</h2>
          <p>
            Your privacy is our priority. We ensure that your images are
            processed securely, and we do not store or share your data without
            your consent.
          </p>
        </div>
      </div>

      <div className="join">
        <h1>Get Started with <span style={{color: 'yellow'}}>No-bg </span>Today!!</h1>
        <p>
          Join thousands of satisfied users who have transformed their images
          with No-bg. Experience the convenience and quality of our background
          removal and color customization service. Say goodbye to tedious manual
          editing and hello to stunning, professional-looking images in just a
          few clicks.
        </p>

        <p>
          Whether you're a professional seeking to enhance your portfolio or a
          business owner looking to improve your product images, No-bg is here
          to help. Try No-bg today and see the difference for yourself!
        </p>
      </div>


      <div className="footer">
        <div className="footer-link">
          <Link style={{ textDecoration: "none", color: "white" }} to="/terms">
            Terms and Condition
          </Link>
        </div>
        <div className="footer-link">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/testimonials"
          >
            User Testimonials
          </Link>
        </div>
        <div className="footer-link">
          <div className="copyright">
            &copy; 2024 No-bg. All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
