import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./portfolio.css";
import iconPortfolio from "./../assets/iconPortfolio.svg";
import image1 from "../assets/image/image1.jpg";
import image2 from "../assets/image/image2.jpg";
import image3 from "../assets/image/image3.jpg";
import image4 from "../assets/image/image4.jpg";
import image5 from "../assets/image/image5.jpg";
import image6 from "../assets/image/image6.jpg";
import image7 from "../assets/image/image7.jpg";
import image8 from "../assets/image/image8.jpg";
import image9 from "../assets/image/image9.jpg";

const Portfolio = () => {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePhotoClick = (src) => {
    setEnlargedPhoto(src);
  };

  const closeModal = () => {
    setEnlargedPhoto(null);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div
      className="portfolio-container"
      style={{
        padding: "150px 100px",
        minHeight: "100vh",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="portfolio-custom-logo-container">
        <img
          src={iconPortfolio}
          alt="Logo"
          className="portfolio-custom-logo"
          style={{ height: "80px" }}
        />
      </div>
      <div className="portfolio-custom-title-container">
        <h1
          className="portfolio-custom-title fw-bold"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "50px",
            margin: "20px 0",
          }}
        >
          Our Portfolio
        </h1>
      </div>
      <div className="portfolio-servis-container">
        <div className="portfolio-servis-item">
          <h2 className="portfolio-servis-title">Design .</h2>
          <h2 className="portfolio-servis-title">Photography .</h2>
          <h2 className="portfolio-servis-title">Videography .</h2>
        </div>
        <div className="portfolio-servis-stats">
          <div className="portfolio-stat-item">
            <span className="portfolio-stat-number">5</span>
            <span className="portfolio-stat-text">Years Experience</span>
          </div>
          <div className="portfolio-stat-item">
            <span className="portfolio-stat-number">50 +</span>
            <span className="portfolio-stat-text">Satisfied Clients</span>
          </div>
          <div className="portfolio-stat-item">
            <span className="portfolio-stat-number">50 +</span>
            <span className="portfolio-stat-text">Completed Projects</span>
          </div>
        </div>
      </div>
      <div className="portfolio-custom-navbar-container">
        <div className="portfolio-custom-navbar">
          <button className="portfolio-uniq-link-custom" onClick={handleBack}>
            Back
          </button>
          <div className="portfolio-custom-navbar-right">
            <a href="#design-marketing">Design Marketing & Architect</a>
            <a href="#commercial">Commercial</a>
            <a href="#ceremonial">Ceremonial</a>
            <a href="#gen-z">Gen-Z</a>
          </div>
        </div>
      </div>
      <div className="portfolio-custom-photo-grid">
        <div className="portfolio-custom-photo-column">
          <div className="portfolio-custom-photo">
            <img
              src={image1}
              alt="Image 1"
              onClick={() => handlePhotoClick(image1)}
            />
          </div>
          <div className="portfolio-custom-photo">
            <img
              src={image2}
              alt="Image 2"
              onClick={() => handlePhotoClick(image2)}
            />
          </div>
          <div className="portfolio-custom-photo">
            <img
              src={image3}
              alt="Image 3"
              onClick={() => handlePhotoClick(image3)}
            />
          </div>
        </div>
        <div className="portfolio-custom-photo-column">
          <div className="portfolio-custom-photo">
            <img
              src={image4}
              alt="Image 4"
              onClick={() => handlePhotoClick(image4)}
            />
          </div>
          <div className="portfolio-custom-photo">
            <img
              src={image5}
              alt="Image 5"
              onClick={() => handlePhotoClick(image5)}
            />
          </div>
          <div className="portfolio-custom-photo">
            <img
              src={image6}
              alt="Image 6"
              onClick={() => handlePhotoClick(image6)}
            />
          </div>
        </div>
        <div className="portfolio-custom-photo-column">
          <div className="portfolio-custom-photo">
            <img
              src={image7}
              alt="Image 7"
              onClick={() => handlePhotoClick(image7)}
            />
          </div>
          <div className="portfolio-custom-photo">
            <img
              src={image8}
              alt="Image 8"
              onClick={() => handlePhotoClick(image8)}
            />
          </div>
          <div className="portfolio-custom-photo">
            <img
              src={image9}
              alt="Image 9"
              onClick={() => handlePhotoClick(image9)}
            />
          </div>
        </div>
      </div>

      {enlargedPhoto && (
        <div className="portfolio-custom-photo-modal" onClick={closeModal}>
          <span className="portfolio-custom-close-modal">&times;</span>
          <img src={enlargedPhoto} alt="Enlarged" />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
