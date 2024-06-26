import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import logo from "./../assets/logoWhite.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "50px 50px 20px",
            backgroundColor: "#B8901A",
          }}
        >
          <div
            style={{
              flexBasis: "20%",
              paddingRight: "20px",
              position: "relative",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "80%", cursor: "pointer" }}
            />
            <p
              style={{
                textAlign: "justify",
                fontSize: "12px",
                fontFamily: "Poppins, sans-serif",
                color: "white",
                marginBottom: "20px",
                cursor: "default",
              }}
            >
              VisioBlend adalah platform digital yang bergerak di bidang,
              desain, fotografer, dan videografer profesional dengan klien di
              Provinsi Bali. Kami menawarkan solusi terpadu untuk kebutuhan
              desain, fotografi, dan videografi, dengan fokus pada
              fleksibilitas, kualitas, dan efisiensi.
            </p>

            <div
              style={{
                position: "absolute",
                top: "0",
                right: "-10px",
                width: "1px",
                height: "100%",
                backgroundColor: "white",
              }}
            ></div>
          </div>
          <div
            style={{
              flexBasis: "20%",
              display: "block",
              marginLeft: "5%",
              position: "relative",
            }}
          >
            <h6
              style={{
                color: "#FFDC73",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 20px 0",
                cursor: "default",
              }}
            >
              Our Company
            </h6>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Home
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              About Us
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Partners & Team
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Contact Us
            </a>
          </div>
          <div
            style={{
              flexBasis: "20%",
              paddingRight: "20px",
            }}
          >
            <h6
              style={{
                color: "#FFDC73",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 20px 0",
                cursor: "default",
              }}
            >
              Services
            </h6>
            <a
              href="/Services"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Marketing Design
            </a>
            <a
              href="/Services2"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Architecture Design
            </a>
            <a
              href="/Services3"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Photography
            </a>
            <a
              href="/Services3"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Videography
            </a>
          </div>
          <div
            style={{
              flexBasis: "20%",
              paddingRight: "20px",
              position: "relative",
            }}
          >
            <h6
              style={{
                color: "#FFDC73",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 20px 0",
                cursor: "default",
              }}
            >
              Features
            </h6>
            <a
              href="/portfolio"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Portfolio
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Article
            </a>
            <a
              href="/Loyaltyreward"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Loyalty Rewards
            </a>
          </div>
          <div
            style={{
              flexBasis: "20%",
              color: "white",
              position: "relative",
            }}
          >
            <h6
              style={{
                color: "#FFDC73",
                fontWeight: "bold",
                textAlign: "left",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 20px 0",
                cursor: "default",
              }}
            >
              Contact Us
            </h6>
            <p
              style={{
                textAlign: "left",
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
              }}
            >
              <a
                href="https://wa.me/6283188029765"
                target="_blank"
                style={{
                  textAlign: "left",
                  fontFamily: "Poppins, sans-serif",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#ffffff",
                }}
              >
                <FontAwesomeIcon
                  icon={faSquareWhatsapp}
                  style={{
                    marginRight: "5px",
                    color: "white",
                    fontSize: "24px",
                  }}
                />{" "}
                +6283188029765
              </a>
            </p>
            <p
              style={{
                textAlign: "left",
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
              }}
            >
              <a
                href="https://mail.google.com/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    marginRight: "5px",
                    color: "white",
                    fontSize: "20px",
                  }}
                />
                visioblend@gmail.com
              </a>
            </p>

            <div
              style={{
                margin: "10% 0 0 12%",
                cursor: "pointer",
              }}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  margin: "0 5%",
                  color: "white",
                  fontSize: "25px",
                  textDecoration: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    marginRight: "5px",
                    color: "white",
                    fontSize: "25px",
                  }}
                />
              </a>

              <a
                href="https://www.instagram.com/visio_blend/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  margin: "0 5%",
                  color: "white",
                  fontSize: "28px",
                  textDecoration: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  style={{ color: "white" }}
                />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.%20Kapten%20Agung%20No.1%2C%20Denpasar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  margin: "0 5%",
                  color: "white",
                  fontSize: "25px",
                  textDecoration: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  style={{
                    marginRight: "5px",
                    color: "white",
                    fontSize: "25px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#846815",
            textAlign: "center",
            color: "white",
            padding: "10px",
            cursor: "default",
          }}
        >
          2024 © VisioBlend X Batavia Guardians | All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
