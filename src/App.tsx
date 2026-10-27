import "./App.css";

function App() {
  return (
    <main>
      {/* HOMEPAGE */}
      <section className="homepage">
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
    </main>
  );
}

export default App;