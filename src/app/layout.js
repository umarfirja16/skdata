// src/app/layout.js
import './globals.css'; // Global CSS untuk seluruh aplikasi
import './styles/layout.css'; // CSS tambahan untuk layout

export const metadata = {
  title: 'PT Sarana Komunikasi Data',
  description: 'Solusi Teknologi Terbaik untuk Berbagai Industri.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header className="header">
          <div className="container">
            <h1>PT Sarana Komunikasi Data</h1>
            <nav className="navbar">
              <a href="/">Home</a>
              <a href="/company/about">About</a>
              <a href="/industries/telco">Industries</a>
              <a href="/solution/facilities">Solutions</a>
              <a href="/company/career">Careers</a>
            </nav>
          </div>
        </header>
        <main className="content">{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} PT Sarana Komunikasi Data</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
