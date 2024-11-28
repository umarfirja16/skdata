"use client";

import "../../styles/globals.css";
import { useState } from "react";
import Link from "next/link"; // Gunakan Link untuk navigasi
import { PartnerCarousel } from "./components/PartnerCarousel"; // Komponen carousel mitra

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en" className={darkMode ? "dark" : "light"}>
      <body>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              Company Name
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/company/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/company/career" className="nav-link">
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/industries/telco" className="nav-link">
                    Telco
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/industries/enterprise" className="nav-link">
                    Enterprise
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/solution/connectivity" className="nav-link">
                    Connectivity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/solution/facilities" className="nav-link">
                    Facilities
                  </Link>
                </li>
                {/* Dropdown untuk bahasa */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Indonesian
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Konten utama */}
        <main className="container mt-5">{children}</main>

        {/* Carousel Mitra */}
        <section className="carousel-section">
          <h2>Our Partners</h2>
          <PartnerCarousel />
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 Company Name. All Rights Reserved.</p>
          <p>Partner 1 | Partner 2 | Partner 3</p>
        </footer>

        {/* Toggle Dark Mode */}
        <button
          className="btn btn-dark position-fixed bottom-0 end-0 m-4"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </body>
    </html>
  );
}
