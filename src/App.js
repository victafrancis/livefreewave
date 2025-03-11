import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LiveFreeWave</h1>
      </header>
      <main>
        <div className="video-container">
          <div className="video">
            <h3>Precious</h3>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/8RwNCO2Vje0?si=x3NYvC1pclPGxAT5" 
              title="Track 1 Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="video">
            <h3>Over Again</h3>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/2EYcysiRc1c?si=Od-S4iOmqU_tFSlt" 
              title="Track 2 Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="video">
            <h3>Immortal Vibes</h3>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/37nWp37L78Q?si=fd5AmoswruU8T0h3" 
              title="Track 3 Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </main>
      <footer>
        <p>
          Contact: <a href="mailto:livefreewave@gmail.com">livefreewave@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
