import React, { useState, useEffect } from "react";
import "../App.css";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../assets/Animation - 1718168768618.json";
import animationData1 from "../assets/Animation - 1718170481820 (1).json";
import animationData2 from "../assets/Animation - 1718181159993 (1).json";
import img1 from "../img/no-bg (3).png";
import img2 from "../img/no-bg (6).png";
import img3 from "../img/images (3).jpeg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`section-1 ${isVisible ? "fade-in" : ""}`}>
        <div className="section-1-content">
          <h1>
            <span style={{ color: "yellow" }}>No-bg:</span> Effortless Image
            Background Removal
          </h1>
          <p>
            Welcome to No-bg, the ultimate web app for effortlessly removing
            backgrounds from your images. Whether you're a designer,
            photographer, or just someone looking to enhance your photos, No-bg
            provides a simple, efficient, and user-friendly solution to your
            background removal needs and adding of background colors that suits
            your image.
          </p>
          <p>
            No-bg is designed to make the process of background removal quick
            and straightforward. With just a few clicks, you can upload your
            image, have the background removed, and download the final product.
            Our advanced algorithm ensures that the background is removed
            accurately, leaving you with a clean and professional image.
          </p>
        </div>
        <div className="bg">
          <Lottie animationData={animationData} />
        </div>
      </div>

      <div className={`section-2 ${isVisible ? "fade-in" : ""}`}>
        <h1>
          Start Using <span style={{ color: "yellow" }}>No-bg</span> for Image
          Background Removal
        </h1>

        <p>
          Easily remove backgrounds from your images in just a few clicks.
          Enhance your photos with clean, professional results instantly.
        </p>
        <p>Click the (Arrow) below to get started!</p>
        
        <div className="section-2-button">
          <div className="button">
            <h2>Get Started Now</h2>
            <Link style={{ textDecoration: "none" }} to="/getstarted">
              <span>
                <i class="fa-solid fa-arrow-right fa-fade icon"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className={`section-3 ${isVisible ? "fade-in" : ""}`}>
        <div className="section-3-content">
          <h1>
            About <span style={{ color: "yellow" }}>No-bg</span>
          </h1>
          <p>
            No-bg is your ultimate solution for removing backgrounds from images
            effortlessly. Whether you need to create transparent backgrounds for
            product photos, social media graphics, or personal projects, No-bg
            makes the process simple and quick.
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

      <div className={`section-4 ${isVisible ? "fade-in" : ""}`}>
        <div className="section-4-content">
          <h1>
            What <span style={{ color: "yellow" }}>No-bg</span> Offers and it's
            free!
          </h1>
          <p>
            No-bg is your ultimate solution for seamless image background
            removal and replacement. Our web application leverages advanced
            algorithms to efficiently remove backgrounds from your images,
            giving you a clean, professional look in just a few clicks. But
            that's not all, <span style={{ color: "yellow" }}>No-bg</span> also
            provides an additional feature that allows you to add a new
            background color to your images after removing the original
            background. This means you can customize your images to match your
            brand's color scheme, create stunning visuals for social media, or
            simply have fun experimenting with different backgrounds.
          </p>
          <p>
            Using No-bg is straightforward and user-friendly. Simply upload your
            image, and let our technology work its magic to remove the
            background. Once the background is removed, you have the option to
            download the image as it is or add a new background color. With a
            vast array of colors to choose from, you can select the perfect
            background that complements your subject. Our intuitive interface
            ensures that the background color will fit perfectly within the
            original dimensions of your image, maintaining a natural and
            professional appearance.
          </p>
          <p>
            Whether you're a <b>programmer</b>, <b>graphic designer</b>,{" "}
            <b>marketer</b>, or just someone looking to enhance your personal
            photos, No-bg provides the tools you need to achieve high-quality
            results effortlessly. Join our growing community of satisfied users
            and see how No-bg can transform your images with ease and precision.
          </p>
        </div>
        <div className="bg">
          <Lottie animationData={animationData2} />
        </div>
      </div>

      <div className={`section-5 ${isVisible ? "fade-in" : ""}`}>
        <h1>
          Practical Example Of What{" "}
          <span style={{ color: "yellow" }}>No-bg</span> Offers!
        </h1>
        <p>Here is the practical example of what No-bg offers and it's free.</p>

        <h3>
          The Original Image{" "}
          <span>
            <i class="fa-solid fa-arrow-down fa-fade icon1"></i>
          </span>
        </h3>
        <img className="section-5-image" src={img3} alt="myImage" />

        <h3>
          The Removed Image Background{" "}
          <span>
            <i class="fa-solid fa-arrow-down fa-fade icon1"></i>
          </span>
        </h3>
        <img className="section-5-image" src={img1} alt="myImage" />

        <h3>
          Added New Background Color{" "}
          <span>
            <i class="fa-solid fa-arrow-down fa-fade icon1"></i>
          </span>
        </h3>
        <img className="section-5-image" src={img2} alt="myImage" />
      </div>

      <div className={`section-6 ${isVisible ? "fade-in" : ""}`}>
        <div>
          <i class="fa-brands fa-twitter fa-beat icon1"></i>
        </div>
        <p>
          "Unlock your creativity with{" "}
          <span style={{ color: "yellow" }}>No-bg</span>: Seamlessly remove
          backgrounds and customize with vibrant colors. Fast, easy, and
          professional results await you."
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

export default Home;
