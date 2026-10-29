import "./App.css";

function App() {
  return (
    <main>
      {/* HOMEPAGE */}
      <section className="homepage">
        <nav className="top-nav">
          <a href="#percorsi" className="nav-button">
            MENU
          </a>
          <a href="#contatti" className="nav-button">
            CONTATTI
          </a>
        </nav>

        <div className="hero-content">
          <h1>BEYOND 40</h1>

          <a href="#percorsi" className="discover-button">
            SCOPRI
          </a>
        </div>
      </section>

      {/* SECONDA SCHERMATA */}
      <section id="percorsi" className="paths">
        <div className="paths-intro">
          <p>IL DOCUMENTARIO</p>

          <h2>
            TRE STORIE.
            <span>UN'UNICA DESTINAZIONE.</span>
          </h2>

          <p>Scegli da dove iniziare.</p>
        </div>

        <div className="paths-container">
          <article className="path-card path-one">
            <h3>THE PLAYERS</h3>
          </article>

          <article className="path-card path-two">
            <h3>THE PEOPLE BEHIND THE SCENE</h3>
          </article>

          <article className="path-card path-three">
            <h3>THE ATMOSPHERE</h3>
          </article>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="contacts">
        <h2>CONTATTI</h2>
        <p>
          <a href="mailto:info@baskettorino.it">info@baskettorino.it</a>
        </p>
      </section>
    </main>
  );
}

export default App;