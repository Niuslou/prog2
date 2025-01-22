import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Unihockey</h1>
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
            <p>Unihockey, auch als Floorball bekannt, ist eine schnelle und dynamische Hallensportart, die Ähnlichkeiten mit Eishockey hat, jedoch ohne Schlittschuhe gespielt wird. Die Spieler nutzen leichte Schläger aus Kunststoff und einen hohlen Plastikball mit Löchern, um Tore zu erzielen. Gespielt wird in der Regel auf einem Spielfeld mit Banden, das etwa die Größe eines Handballfeldes hat. Jede Mannschaft besteht aus fünf Feldspielern und einem Torhüter.Das Spiel ist geprägt von Schnelligkeit, Präzision und Teamarbeit. Körperkontakt ist im Vergleich zu anderen Hockeysportarten stark eingeschränkt, was Unihockey besonders fair und zugänglich macht. Die Sportart hat ihre Wurzeln in Schweden und wird heute weltweit gespielt, mit offiziellen Weltmeisterschaften und wachsender Popularität, insbesondere in Europa.Unihockey eignet sich sowohl für Anfänger als auch für Profis und wird oft in Schulen, Vereinen oder Freizeiteinrichtungen gespielt. Es ist ein Sport, der Fitness, Koordination und strategisches Denken fördert und gleichzeitig großen Spaß macht!</p>
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
