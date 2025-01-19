import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Titel</h1>
        <nav className="nav">
          <span>Home</span>
          <input type="text" placeholder="Suchen" className="search-bar" />
        </nav>
      </header>
      
      
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
            <div className="card-content">
              <h3>Geschichte</h3>
              <p>Kurze Einführung in die Geschichte</p>
            </div>
          </a>
          
          <a href="/skills.html" className="section-card">
            <div className="card-image"></div>
            <div className="card-content">
              <h3>Verschiedene Skills</h3>
              <p>Aufzählung der Skills.</p>
            </div>
          </a>
          
          <a href="/bildergalerie.html" className="section-card">
            <div className="card-image"></div>
            <div className="card-content">
              <h3>Bildergalerie</h3>
              <p></p>
            </div>
          </a>
        </div>
      </main>
      
      
      <footer className="footer">
        <a href="/ueber.html">Über niemanden</a>
        <a href="/kontakt.html">keinen Kontakt</a>
        <a href="/privacy-policy.html">Privacy Policy</a> 
      </footer>
    </div>
  );
}

export default App;
