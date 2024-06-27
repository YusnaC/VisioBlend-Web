import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoicon from "./../assets/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isServicesPage = /^\/Services\d*$/.test(pathname);

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="justify-content-center shadow"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-brand" style={{ marginLeft: "32px" }}>
            <Navbar.Brand href="/">
              <img
                src={logoicon}
                height="60"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </div>
          <div className="nav-links d-flex justify-content-center">
            <Nav>
              <Nav.Link
                href="/"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname === "/" ? "#B8901A" : "#000",
                  fontWeight: pathname === "/" ? "bold" : "",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/Services"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: isServicesPage ? "#B8901A" : "#000",
                  fontWeight: isServicesPage ? "bold" : "",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/portfolio"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname === "/portfolio" ? "#B8901A" : "#000",
                  fontWeight: pathname === "/portfolio" ? "bold" : "",
                }}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="/Loyaltyreward"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname === "/Loyaltyreward" ? "#B8901A" : "#000",
                  fontWeight: pathname === "/Loyaltyreward" ? "bold" : "",
                }}
              >
                Loyalty Rewards
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
