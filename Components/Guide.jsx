import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Guide.css'

const Guide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div>
      <div className={`guide ${isVisible ? "fade-in" : ""}`}>
        <h1>Guidelines for Using <span style={{color: 'yellow'}}>No-bg</span></h1>
        <div>
          <h2>Step 1: Upload Your Image</h2>
          <p>Click on the <span style={{color: 'yellow'}}><b>Choose File</b></span> button to select and upload your desired image.</p>
          <p>Once your image is uploaded, click <span style={{color: 'yellow'}}><b>Remove Background</b></span> to automatically remove the background from the image.</p>
        </div>

        <div>
          <h2>Step 2: Save Your Image</h2>
          <p>After the background is removed, you can click <span style={{color: 'yellow'}}><b>Save</b></span> to download the image with a transparent background.
          </p>
        </div>

        <div>
          <h2>Step 3: Apply a Background Color (Optional)</h2>
          <ol>
            <li>If you wish to apply a new background color, type the name of the color you want in the provided field.</li>
            <li>Click <span style={{color: 'yellow'}}><b>Apply Color</b></span> to set the new background color. Please wait for the loading process to complete.</li>
            <li>Once the color is applied, you can click <span style={{color: 'yellow'}}><b>Save</b></span> to download the image with the new background color. Note that if you do not follow this step, the image will not save with the new background color.</li>
          </ol>
        </div>

        <div>
          <h2>Important Reminder</h2>
          <p>Ensure you remove the background from your image before attempting to apply a new background color. The image must have a transparent background for the new color to be applied correctly.
          </p>
        </div>
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
  )
}

export default Guide