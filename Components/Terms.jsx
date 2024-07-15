import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Terms.css";

const Terms = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`terms ${isVisible ? "fade-in" : ""}`}>
      <div className="terms1">
        <h1>Terms and Conditions</h1>
        <p>
          <h2>Introduction</h2>
          <p>
            Welcome to No-bg! These Terms and Conditions outline the rules and
            regulations for the use of No-bg's Website and services.
          </p>
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use No-bg if you do not agree to take
          all of the terms and conditions stated on this page.
        </p>

        <p>
          <h2>Services</h2>
          <p>
            No-bg offers image background removal services and the ability to
            add a new background color to images. By using our services, you
            agree to the terms outlined herein.
          </p>
        </p>

        <p>
          <h2>License</h2>
          <p>
            Unless otherwise stated, No-bg and/or its licensors own the
            intellectual property rights for all material on No-bg. All
            intellectual property rights are reserved. You may access this from
            No-bg for your own personal use subjected to restrictions set in
            these terms and conditions.
          </p>
        </p>

        <p>
          <h2>User Content</h2>
          <p>
            In these Terms and Conditions, “Your Content” shall mean any image,
            audio, video, text, or other material you choose to upload on this
            Website. By uploading Your Content, you grant No-bg a non-exclusive,
            worldwide irrevocable, sub-licensable license to use, reproduce,
            adapt, publish, translate, and distribute it in any media. Your
            Content must be your own and must not be invading any third-party’s
            rights. No-bg reserves the right to remove any of Your Content from
            this Website at any time without notice.
          </p>
        </p>

        <p>
          <h2>Limitations of Liability</h2>
          <p>
            In no event shall No-bg, nor any of its officers, directors, and
            employees, be held liable for anything arising out of or in any way
            connected with your use of this Website. No-bg, including its
            officers, directors, and employees shall not be held liable for any
            indirect, consequential, or special liability arising out of or in
            any way related to your use of this Website.
          </p>
        </p>

        <p>
          <h2>Disclaimer</h2>
          <p>
            The services on No-bg are provided “as is,” with all faults, and
            No-bg expresses no representations or warranties, of any kind
            related to this Website or the materials contained on this Website.
            Also, nothing contained on this Website shall be interpreted as
            advising you.
          </p>
        </p>

        <p>
          <h2>Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent No-bg from and against
            any and/or all liabilities, costs, demands, causes of action,
            damages, and expenses arising in any way related to your breach of
            any of the provisions of these Terms.
          </p>
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
            &copy; 2024 NO-bg. All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
