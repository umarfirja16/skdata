// src/app/layout.js
import Link from 'next/link';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PT Sarana Komunikasi Data (SKD)</title>
      </head>
      <body>
        <header>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
              <li style={{ margin: '0 15px' }}>
                <Link href="/">Home</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link href="/company/about">Company</Link>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '5px' }}>
                  <li><Link href="/company/about">About Us</Link></li>
                  <li><Link href="/company/career">Career</Link></li>
                </ul>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link href="/industries/telco">Industries</Link>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '5px' }}>
                  <li><Link href="/industries/telco">Telecommunications</Link></li>
                  <li><Link href="/industries/enterprise">Enterprise</Link></li>
                </ul>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link href="/solution/facilities">Solutions</Link>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '5px' }}>
                  <li><Link href="/solution/facilities">Facilities</Link></li>
                  <li><Link href="/solution/power-system">Power Systems</Link></li>
                  <li><Link href="/solution/connectivity">Connectivity</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ padding: '20px', textAlign: 'center', background: '#f1f1f1' }}>
          <p>&copy; 2024 PT Sarana Komunikasi Data (SKD) - All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
