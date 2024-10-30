import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1 className="title">Titel</h1>
        <nav className="nav">
          <span>Home</span>
          <input type="text" placeholder="Suchen" className="search-bar" />
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="content">
        <div className="intro">
          <div className="intro-image"></div>
          <div className="intro-text">
            <h2>Kurze Einleitung zu Unihockey</h2>
            <p>dgfsdasdhrQJTURZRHDJDUZEHDFDFUTURDHGKFDHKFJDFH</p>
          </div>
        </div>
        
        <div className="sections">
          <a href="/geschichte.html" className="section-card">
            <div className="card-image"></div>
            <h3>Geschichte</h3>
            <p>Kurze Einführung in die Geschichte</p>
          </a>
          
          <a href="/skills.html" className="section-card">
            <div className="card-image"></div>
            <h3>Verschiedene Skills</h3>
            <p>Aufzählung der Skills.</p>
          </a>
          
          <a href="/bildergalerie.html" className="section-card">
            <div className="card-image"></div>
            <h3>Bildergalerie</h3>
            <p></p>
          </a>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <p>Über niemanden</p>
        <p>keinen Kontakt</p>
        <p>Privacy Policy</p>
      </footer>
    </div>
  );
}

export default App;
