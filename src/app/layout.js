"use client"; // Enable "use client" for React hooks in Next.js App directory

import { useState, useEffect } from "react";
import Link from "next/link";
import { PartnerCarousel } from "./components/PartnerCarousel"; // Carousel for partners
import "../../styles/globals.css"; // Global styles
import Image from "next/image";
import { FaMoon, FaSun } from 'react-icons/fa'; // Import dark mode icons

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    // Check if dark mode is set previously
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Save theme setting in localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PT SARANA KOMUNIKASI DATA</title>
        <meta
          name="description"
          content="Innovating the future with technology and IoT solutions."
        />
      </head>
      <body className="bg-white dark:bg-gray-800 transition-colors duration-300">
        {/* Header */}
        <header className="flex items-center justify-between p-6 bg-white text-black dark:bg-blue-900 dark:text-white">
          <div className="flex items-center space-x-4">
            <Image
              src="/logos/company_logo.png"
              alt="Sarana Komunikasi Data Logo"
              width={50}
              height={50}
            />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/company/about" className="hover:text-gray-400">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/industries/telco" className="hover:text-gray-400">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/solution/facilities" className="hover:text-gray-400">
                  Solution
                </Link>
              </li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="bg-gray-600 p-2 rounded">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </header>

        {/* Main */}
        <main>
          {/* Hero Section */}
          <section className="hero bg-gradient-to-r from-blue-500 to-blue-700 text-white p-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Sarana Komunikasi Data</h1>
            <p className="text-lg">Innovating the future with technology & IoT solutions.</p>
          </section>

          {/* Our Partners */}
          <section className="partners mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
            <PartnerCarousel /> {/* Carousel for partners */}
          </section>

          {/* Our Customers */}
          <section className="customers mt-16 bg-gray-100 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Customers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <Image
                src="/logos/customer1.png"
                alt="Customer 1"
                width={100}
                height={50}
              />
              <Image
                src="/logos/customer2.png"
                alt="Customer 2"
                width={100}
                height={50}
              />
              <Image
                src="/logos/customer3.png"
                alt="Customer 3"
                width={100}
                height={50}
              />
              <Image
                src="/logos/customer4.png"
                alt="Customer 4"
                width={100}
                height={50}
              />
            </div>
          </section>

          {/* Our Certifications */}
          <section className="certificates mt-16 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Certifications</h2>
            <div className="flex justify-center gap-8">
              <div className="certificate-card">Certification 1</div>
              <div className="certificate-card">Certification 2</div>
              <div className="certificate-card">Certification 3</div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact bg-gray-800 text-white py-12 text-center">
            <p>Contact Us: sales@skdata.id</p>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-6 text-center">
          <p>&copy; 2024 Sarana Komunikasi Data. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
