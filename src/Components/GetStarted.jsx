import React, { useState, useEffect } from 'react';
import '../GetStarted.css'
import BackToTop from '../Components/BackToTop'

const GetStarted = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [isBgRemoved, setIsBgRemoved] = useState(false);

  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    if (bgColor && isBgRemoved) {
      formData.append('bgColor', bgColor);
    }
    setLoading(true);
    /* https://no-bg-backend-1.onrender.com */
    try {
      const response = await fetch('https://no-bg-backend-1.onrender.com/remove-bg', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) {
        throw new Error('Failed to remove background');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageSrc(url);
      setIsBgRemoved(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    setImageSrc(url);
    setIsBgRemoved(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'no-bg.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleApplyColor = () => {
    if (!isBgRemoved) {
      alert('Remove the original background before applying background color.');
      return;
    }
    handleUpload(new Event('submit'));
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className={`App ${isVisible ? "fade-in" : ""}`}>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
         onChange={handleFileChange}
        />
        <input
          className='Enter-color'
          type="text"
          placeholder="Enter background color (optional)"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <button type="submit">Remove Background</button>
        <button style={{marginBottom: '2rem'}} type="button" onClick={handleApplyColor}>Apply Color</button>
        <h4 style={{textAlign: 'center', color: 'silver', marginBottom: '4rem'}}> Your Image Displays Here</h4>
      </form>
      {loading && <p>Loading...</p>}
      {imageSrc && (
        <div className="image-container">
          <div className="image-wrapper" style={{ backgroundColor: bgColor }}>
            <img src={imageSrc} alt="Processed" className="processed-image" />
          </div>
          {!loading && <button className='save-button' onClick={handleDownload}>Save</button>}
        </div>
      )}

      <BackToTop />
    </div>
  )
}

export default GetStarted
