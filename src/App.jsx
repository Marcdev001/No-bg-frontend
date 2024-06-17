import React from 'react';
import { Route, Routes} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home';
import GetStarted from './Components/GetStarted';
import Guide from './Components/Guide';
import Terms from './Components/Terms';
import Testimonials from './Components/Testimonials';
import Navbar from './Navbar';

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </div>
  );
}

export default App




























/* import React, { useState } from 'react';

import './App.css';

function App() {
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

    try {
      const response = await fetch('http://localhost:3000/remove-bg', {
        method: 'POST',
        body: formData,
      });

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

  return (
    <div className="App">
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <input
          type="text"
          placeholder="Enter background color (optional)"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <button type="submit">Upload</button>
        <button type="button" onClick={handleApplyColor}>Apply Color</button>
      </form>
      {loading && <p>Loading...</p>}
      {imageSrc && (
        <div className="image-container">
          <div className="image-wrapper" style={{ backgroundColor: bgColor }}>
            <img src={imageSrc} alt="Processed" className="processed-image" />
          </div>
          {!loading && <button onClick={handleDownload}>Save</button>}
        </div>
      )}
    </div>
  );
}

export default App;

 */



/* import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/remove-bg', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to remove background');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageSrc(url);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    setImageSrc(url);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'no-bg.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
      {loading && <p>Loading...</p>}
      {imageSrc && (
        <>
          <img src={imageSrc} alt="Processed" style={{ width: 200, height: 'auto' }} />
          {!loading && <button onClick={handleDownload}>Save</button>}
        </>
      )}
    </div>
  );
}

export default App; */