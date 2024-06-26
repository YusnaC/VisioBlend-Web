import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./portfolio.css";
import iconPortfolio from "./../assets/iconPortfolio.svg";
import image0 from "../assets/image/image0.jpg";
import image1 from "../assets/image/image1.jpg";
import image2 from "../assets/image/image2.jpg";
import image3 from "../assets/image/image3.jpg";
import image4 from "../assets/image/image4.png";
import image5 from "../assets/image/image5.jpg";
import image6 from "../assets/image/image6.jpg";
import image7 from "../assets/image/image7.jpg";
import image8 from "../assets/image/image8.jpg";
import image9 from "../assets/image/image9.jpg";
import image10 from "../assets/image/image10.jpg";
import image11 from "../assets/image/image11.jpg";
import image12 from "../assets/image/image12.png";
import image13 from "../assets/image/image13.jpg";
import image14 from "../assets/image/image14.png";
import image15 from "../assets/image/image15.jpg";
import image16 from "../assets/image/image16.png";
import image17 from "../assets/image/image17.jpg";
import image18 from "../assets/image/image18.jpg";
import image19 from "../assets/image/image19.jpg";
import image20 from "../assets/image/image20.png";
import image21 from "../assets/image/image21.jpg";
import image22 from "../assets/image/image22.jpg";
import image23 from "../assets/image/image23.jpg";

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
        padding: "140px 50px",
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
          Our <span style={{ color: "#B8901A" }}>Portfolio</span>
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
      {/* <div className="portfolio-custom-navbar-container">
        <div className="portfolio-custom-navbar">
          <button
            className="portfolio-uniq-link-custom"
            onClick={() => window.history.back()}
          >
            All
          </button>
          <div className="portfolio-custom-navbar-right">
            <a href="#design-marketing">Design Marketing & Architect</a>
            <a href="#commercial">Commercial</a>
            <a href="#ceremonial">Ceremonial</a>
            <a href="#gen-z">Gen-Z</a>
          </div>
        </div>
      </div> */}
      <div className="portfolio-custom-photo-grid">
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
        <div className="portfolio-custom-photo">
          <img
            src={image21}
            alt="Image 21"
            onClick={() => handlePhotoClick(image21)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image22}
            alt="Image 22"
            onClick={() => handlePhotoClick(image22)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image23}
            alt="Image 23"
            onClick={() => handlePhotoClick(image23)}
          />
        </div>
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
            src={image0}
            alt="Image 0"
            onClick={() => handlePhotoClick(image0)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image6}
            alt="Image 6"
            onClick={() => handlePhotoClick(image6)}
          />
        </div>
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
        <div className="portfolio-custom-photo">
          <img
            src={image10}
            alt="Image 10"
            onClick={() => handlePhotoClick(image10)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image11}
            alt="Image 11"
            onClick={() => handlePhotoClick(image11)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image12}
            alt="Image 12"
            onClick={() => handlePhotoClick(image12)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image13}
            alt="Image 13"
            onClick={() => handlePhotoClick(image13)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image14}
            alt="Image 14"
            onClick={() => handlePhotoClick(image14)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image15}
            alt="Image 15"
            onClick={() => handlePhotoClick(image15)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image16}
            alt="Image 16"
            onClick={() => handlePhotoClick(image16)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image17}
            alt="Image 17"
            onClick={() => handlePhotoClick(image17)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image18}
            alt="Image 18"
            onClick={() => handlePhotoClick(image18)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image19}
            alt="Image 19"
            onClick={() => handlePhotoClick(image19)}
          />
        </div>
        <div className="portfolio-custom-photo">
          <img
            src={image20}
            alt="Image 20"
            onClick={() => handlePhotoClick(image20)}
          />
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
