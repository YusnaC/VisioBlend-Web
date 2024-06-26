import React, { useState } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import iconpartners from "./../assets/iconPartners.svg";
import banner from "./../assets/banner.svg";
import feed from "./../assets/feed.svg";
import design from "./../assets/arsitektur.svg";
import ceremonial from "./../assets/ceremonial.svg";
import reels from "./../assets/reels.svg";
import Picture1 from "./../assets/Picture1.png";
import Picture2 from "./../assets/Picture2.png";
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
import about from "./../assets/iconAboutus.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaPhone, FaComments, FaTasks, FaBox } from "react-icons/fa";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  const handlePhotoClick = (src) => {
    setEnlargedPhoto(src);
  };

  const closeModal = () => {
    setEnlargedPhoto(null);
  };

  return (
    // BAGIAN MOST NEEDED SERVICE
    <div className="container-home" style={{ cursor: "default" }}>
      {" "}
      <div
        className="banner position-relative d-inline-block"
        style={{
          width: "100%",
          marginTop: "50px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        <img
          src={banner}
          className="img-fluid"
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          className="teks-di-atas position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{
            fontFamily: "'Outfit', sans-serif",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "0" }}>
            Realize & Capture Every Moment <br /> with{" "}
            <span style={{ color: "#B8901A" }}>VisioBlend</span>
          </h1>
          {/* <h1 style={{ margin: "0" }}>
            With <span style={{ color: "#B8901A" }}>V</span>
            isio
            <span style={{ color: "#B8901A" }}>B</span>
            lend
          </h1> */}
        </div>
      </div>
      <div className="container" style={{ width: "100%" }}>
        <div
          className="Heading-text"
          style={{ margin: "50px 0", fontFamily: "'Outfit', sans-serif" }}
        >
          <h1 className="fw-bold">
            Most{" "}
            <span style={{ color: "#B8901A" }}>Needed Services in Bali</span>
          </h1>
          <div
            className="text-home-head"
            style={{
              color: "gray",
              lineHeight: "15px",
              marginTop: "30px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <p>
              "Menyediakan Jasa Layanan Desain Marketing, Desain Arsitektur,
              Fotografi & Videografi."{" "}
            </p>
          </div>
        </div>
        <div
          className="box-home-container d-flex gap-5"
          style={{ fontFamily: "Poppins, sans-serif", marginLeft: "-20px" }}
        >
          {/* SERVICE 1 */}
          <a href="/Services" className="box-home-link">
            <div className="box-home">
              <div className="box-home-title">
                <p style={{ margin: 0 }}>Marketing Design</p>
              </div>

              <img
                src={feed}
                alt="Service 1"
                style={{ alignItems: "center", padding: "20px" }}
              />
              <div
                className="element-boxHome"
                style={{
                  textAlign: "left",
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p className="fw-bold m-0">Design Feed, Story, Logo, etc</p>
                <div
                  className="wrap-rating d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#B8901A" }} />
                  <p style={{ margin: 0, marginLeft: "10px", color: "gray" }}>
                    (15)
                  </p>
                </div>
                <hr
                  className="custom-vertical-line"
                  style={{
                    borderLeft: "1px solid #ccc",
                    width: "100%",
                    position: "absolute",
                    marginTop: "75px",
                    left: "0",
                  }}
                />
                <div
                  className="wrap-price d-flex justify-content-between align-items-center"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Start Rp. 16,000
                  </p>
                  <div
                    style={{
                      backgroundColor: "#F9F1E7",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        color: "#B8901A",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* SERVICE 2 */}
          <a href="/Services2" className="box-home-link">
            <div className="box-home">
              <div className="box-home-title">
                <p style={{ margin: 0 }}>Architect Design</p>
              </div>
              <img
                src={design}
                alt="Service 2"
                style={{
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "30px",
                }}
              />
              <div
                className="element-boxHome"
                style={{
                  textAlign: "left",
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p className="fw-bold m-0">2D/3D Design</p>
                <div
                  className="wrap-rating d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#B8901A" }} />
                  <p style={{ margin: 0, marginLeft: "10px", color: "gray" }}>
                    (20)
                  </p>
                </div>
                <hr
                  className="custom-vertical-line"
                  style={{
                    borderLeft: "1px solid #ccc",
                    width: "100%",
                    position: "absolute",
                    marginTop: "75px",
                    left: "0",
                  }}
                />
                <div
                  className="wrap-price d-flex justify-content-between align-items-center"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Start Rp. 16,000
                  </p>
                  <div
                    style={{
                      backgroundColor: "#F9F1E7",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        color: "#B8901A",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* SERVICE 3 */}
          <a href="/Services3" className="box-home-link">
            <div className="box-home">
              <div className="box-home-title">
                <p style={{ margin: 0 }}>Photography</p>
              </div>

              <img
                src={ceremonial}
                alt="Service 3"
                style={{
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "30px",
                }}
              />
              <div
                className="element-boxHome"
                style={{
                  textAlign: "left",
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p className="fw-bold m-0">Ceremonial, Company, Gen-Z</p>
                <div
                  className="wrap-rating d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#E7E9EB" }} />
                  <p style={{ margin: 0, marginLeft: "10px", color: "gray" }}>
                    (102)
                  </p>
                </div>
                <hr
                  className="custom-vertical-line"
                  style={{
                    borderLeft: "1px solid #ccc",
                    width: "100%",
                    position: "absolute",
                    marginTop: "75px",
                    left: "0",
                  }}
                />
                <div
                  className="wrap-price d-flex justify-content-between align-items-center"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Start Rp. 250,000
                  </p>
                  <div
                    style={{
                      backgroundColor: "#F9F1E7",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        color: "#B8901A",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* SERVICE 4 */}
          <a href="/Services3" className="box-home-link">
            <div className="box-home">
              <div className="box-home-title">
                <p style={{ margin: 0 }}>Videography</p>
              </div>

              <img
                src={reels}
                alt="Service 4"
                style={{
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "30px",
                }}
              />
              <div
                className="element-boxHome"
                style={{
                  textAlign: "left",
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p className="fw-bold m-0">Company Profile, Content, etc</p>
                <div
                  className="wrap-rating d-flex align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#B8901A", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#E7E9EB" }} />
                  <p style={{ margin: 0, marginLeft: "10px", color: "gray" }}>
                    (102)
                  </p>
                </div>
                <hr
                  className="custom-vertical-line"
                  style={{
                    borderLeft: "1px solid #ccc",
                    width: "100%",
                    position: "absolute",
                    marginTop: "75px",
                    left: "0",
                  }}
                />
                <div
                  className="wrap-price d-flex justify-content-between align-items-center"
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Start Rp. 250,000
                  </p>
                  <div
                    style={{
                      backgroundColor: "#F9F1E7",
                      padding: "10px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        color: "#B8901A",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* BAGIAN ALUR PEMESANAN */}
      <div
        className="custom-container d-flex"
        style={{
          fontFamily: "Poppins, sans-serif",
          marginTop: "100px",
          height: "180px",
          width: "100%",
        }}
      >
        <div className="custom-header">
          <div className="custom-title fs-3">
            <p>Alur Pemesanan</p>
          </div>
          <div className="custom-step">
            <div>
              <FaPhone
                className="custom-phoneIcon custom-icon"
                style={{ transform: "scaleX(-1)" }}
              />{" "}
              1. Hubungi Kami
            </div>
            <div>
              <FaComments className="custom-commentsIcon custom-icon" /> 2.
              Diskusi Projek
            </div>
            <div>
              <FaTasks className="custom-tasksIcon custom-icon" /> 3. Pengerjaan
              Projek
            </div>
            <div>
              <FaBox className="custom-boxIcon custom-icon" /> 4. Penyerahan
              Projek
            </div>
          </div>
        </div>
      </div>
      {/* BAGIAN ABOUT US */}
      <div
        className="aboutSectionCustom"
        style={{
          height: "100vh",
          padding: "100px",
          textAlign: "center",
        }}
      >
        <div
          className="aboutSectionCustom-wrapper"
          style={{ justifyContent: "center", marginTop: "-50px" }}
        >
          <img
            src={about}
            alt="About"
            className="aboutCustom"
            style={{ height: "80px" }}
          />
          <h1
            className="titleCustom fw-bold"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "50px",
              margin: "20px 0",
            }}
          >
            About <span style={{ color: "#B8901A" }}>Us</span>
          </h1>
          <p
            className="descriptionCustom"
            style={{ marginTop: "2%", lineHeight: "30px" }}
          >
            VisioBlend adalah platform digital yang bergerak di bidang desain,
            fotografi, dan videografi profesional dengan <br />
            klien di Provinsi Bali. Kami menawarkan solusi terpadu untuk semua
            kebutuhan desain, fotografi, dan videografi <br />
            dengan fokus pada fleksibilitas, kualitas, dan efisiensi.
          </p>
          <div className="servicesCustom" style={{ marginTop: "60px" }}>
            <div className="serviceCardCustom">
              <h3 className="serviceTitleCustom">Design</h3>
              <p className="service-text">
                Layanan desain untuk pemasaran dan desain bangunan dengan fokus
                pada kualitas dan keunikan.
              </p>
            </div>
            <div className="serviceCardCustom">
              <h3 className="serviceTitleCustom">Photography</h3>
              <p className="service-text">
                Layanan fotografi untuk komersial, acara, dan photoshoot dengan
                memberikan hasil yang memuaskan.
              </p>
            </div>
            <div className="serviceCardCustom">
              <h3 className="serviceTitleCustom">Videography</h3>
              <p className="service-text">
                Layanan videografi untuk promosi produk, acara, dan konten media
                sosial dengan hasil berkualitas.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION PEMISAH */}
      <div className="section"></div>
      {/* BAGIAN PARTNERS & TEAMS */}
      <div
        className="partner-container-content"
        style={{
          padding: "100px",
          minHeight: "100vh",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="partner-wrapper-content">
          <img
            src={iconpartners}
            alt="Logo"
            className="partner-logo"
            style={{ height: "80px" }}
          />
          <h1
            className="partner-title fw-bold"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "50px",
              margin: "20px 0",
            }}
          >
            Partners &{" "}
            <span className="partner-team-title" style={{ color: "#B8901A" }}>
              Team
            </span>
          </h1>
          <h2 className="partner-title2 fs-3">
            Collaborative Excellence : Building Bridges, Driving Success
          </h2>
          <p style={{ marginTop: "1%", lineHeight: "25px" }}>
            VisioBlend berkomitmen untuk bekerja sama dengan mitra dan tim
            profesional terbaik di bidangnya. <br />
            Kami membangun hubungan yang solid dengan berbagai ahli desain,
            fotografi, dan videografi untuk memastikan <br />
            setiap proyek mencapai standar kebutuhan masyarakat.
          </p>
          <div
            className="partner-boxes-wrapper d-flex"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <div
              className="partner-boxes-container d-flex"
              style={{
                justifyContent: "center",
                gap: "50px",
                margin: "15px 0",
              }}
            >
              <div className="partner-box">
                <img src={Picture1} alt="picture" style={{ width: "50%" }} />
              </div>
              <div className="partner-box">
                <img src={Picture2} alt="picture" style={{ width: "50%" }} />
              </div>
              <div className="partner-box">Coming Soon</div>
              <div className="partner-box">Coming Soon</div>
            </div>
            <div
              className="partner-boxes-container d-flex"
              style={{
                justifyContent: "center",
                gap: "50px",
                margin: "15px 0",
              }}
            >
              <div className="partner-box">Coming Soon</div>
              <div className="partner-box">Coming Soon</div>
              <div className="partner-box">Coming Soon</div>
              <div className="partner-box">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section"></div>
      {/* BAGIAN PORTFOLIO */}
      <div
        className="portfolio-container"
        style={{
          padding: "100px",
          minHeight: "100vh",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="custom-logo-container">
          <img
            src={iconPortfolio}
            alt="Logo"
            className="custom-logo"
            style={{ height: "80px" }}
          />
        </div>
        <div className="custom-title-container">
          <h1
            className="custom-title fw-bold"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "50px",
              margin: "20px 0",
            }}
          >
            Our <span style={{ color: "#B8901A" }}>Portfolio</span>
          </h1>
        </div>
        <div className="servis-container">
          <div className="servis-item">
            <h2 className="servis-title">Design .</h2>
            <h2 className="servis-title">Photography .</h2>
            <h2 className="servis-title">Videography .</h2>
          </div>
          <div className="servis-stats">
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-text">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50 +</span>
              <span className="stat-text">Satisfied Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50 +</span>
              <span className="stat-text">Completed Projects</span>
            </div>
          </div>
        </div>
        <div className="custom-navbar-container">
          <div className="custom-navbar">
            <button
              className="uniq-link-custom"
              onClick={() => window.history.back()}
            >
              All
            </button>
            <div className="custom-navbar-right">
              <a href="#design-marketing">Design Marketing & Architect</a>
              <a href="#commercial">Commercial</a>
              <a href="#ceremonial">Ceremonial</a>
              <a href="#gen-z">Gen-Z</a>
            </div>
          </div>
        </div>
        <div className="custom-photo-grid">
          <div className="custom-photo-column">
            <div className="custom-photo">
              <img
                src={image1}
                alt="Image 1"
                onClick={() => handlePhotoClick(image1)}
              />
            </div>
            <div className="custom-photo">
              <img
                src={image2}
                alt="Image 2"
                onClick={() => handlePhotoClick(image2)}
              />
            </div>
            <div className="custom-photo">
              <img
                src={image3}
                alt="Image 3"
                onClick={() => handlePhotoClick(image3)}
              />
            </div>
          </div>
          <div className="custom-photo-column">
            <div className="custom-photo">
              <img
                src={image4}
                alt="Image 4"
                onClick={() => handlePhotoClick(image4)}
              />
            </div>
            <div className="custom-photo">
              <img
                src={image5}
                alt="Image 5"
                onClick={() => handlePhotoClick(image5)}
              />
            </div>
            <div className="custom-photo">
              <img
                src={image6}
                alt="Image 6"
                onClick={() => handlePhotoClick(image6)}
              />
            </div>
          </div>
          <div className="custom-photo-column">
            <div className="custom-photo">
              <img
                src={image7}
                alt="Image 7"
                onClick={() => handlePhotoClick(image7)}
              />
            </div>
            <div className="custom-photo">
              <img
                src={image8}
                alt="Image 8"
                onClick={() => handlePhotoClick(image8)}
              />
            </div>
            <div className="custom-photo">
              <img
                src={image9}
                alt="Image 9"
                onClick={() => handlePhotoClick(image9)}
              />
            </div>
          </div>
        </div>

        {enlargedPhoto && (
          <div className="custom-photo-modal" onClick={closeModal}>
            <span className="custom-close-modal">&times;</span>
            <img src={enlargedPhoto} alt="Enlarged" />
          </div>
        )}
      </div>
      <div className="section"></div>
      {/*BAGIAN CONTACT US */}
      <div
        className="custom-contact-container"
        style={{ fontFamily: "Poppins, sans-serif", height: "100vh" }}
      >
        <div className="custom-contact-wrapper d-flex">
          <div className="form-wrapper" style={{ marginRight: "200px" }}>
            <form className="custom-contact-form" style={{ width: "400px" }}>
              <div className="custom-mt-4 custom-mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="custom-form-control form-control"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div className="custom-mt-4 custom-mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="custom-form-control form-control"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div className="custom-mt-4 custom-mb-4">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="custom-form-control form-control"
                  name="phone"
                  placeholder="Your number"
                />
              </div>
              <div className="custom-mt-4 custom-mb-5">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="custom-form-control form-control"
                  name="message"
                  placeholder="Write something..."
                ></textarea>
              </div>
              <button type="submit" className="custom-submit-button">
                Submit
              </button>
            </form>
          </div>
          <div className="custom-contact-info">
            <div className="contact-info-wrap">
              <h1
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "bold",
                }}
              >
                Contact Us{" "}
                {/* <span
                  className="custom-highlight"
                  style={{
                    color: "#bf9b30",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Today
                </span> */}
              </h1>
              <p style={{ marginTop: "20px" }}>
                We will contact you and draw up requirements for the project and
                estimate.
              </p>

              <div className="text-wrap-contactInfo">
                <p className="text-contactInfo">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#bf9b30", marginRight: "5px" }}
                  />{" "}
                  <span style={{ fontWeight: "bold" }}>Email</span>
                  <br />
                  <a
                    href="https://mail.google.com/"
                    target="_blank"
                    className="custom-highlight-p"
                  >
                    visioblendbali@gmail.com
                  </a>
                </p>
              </div>
              <div className="text-wrap-contactInfo">
                <p className="text-contactInfo">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#bf9b30", marginRight: "5px" }}
                  />{" "}
                  <span style={{ fontWeight: "bold" }}>Phone</span>
                  <br />
                  <a
                    href="https://wa.me/6283188029765"
                    target="_blank"
                    className="custom-highlight-p"
                  >
                    +6283188029765
                  </a>
                </p>
              </div>
              <div className="text-wrap-contactInfo">
                <p className="text-contactInfo">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ color: "#bf9b30", marginRight: "5px" }}
                  />{" "}
                  <span style={{ fontWeight: "bold" }}>Address</span>
                  <br />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl.%20Kapten%20Agung%20No.1%2C%20Denpasar"
                    target="_blank"
                    className="custom-highlight-p"
                  >
                    Jl. Kapten Agung No.1, Denpasar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
