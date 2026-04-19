import { useState } from 'react';
import BirthdayIntro from './components/BirthdayIntro';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <BirthdayIntro onStart={() => setHasStarted(true)} />;
  }

  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-badge">Happy Birthday Surprise</div>

        <h1 className="hero-title">
          To My Best Friend
          <span>this whole day is for you ♡</span>
        </h1>

        <p className="hero-text">
          A little birthday website made with love, memories, and our plans for
          the cutest day ever.
        </p>
      </section>

      <section className="grid-section">
        <article className="card card-large">
          <p className="section-label">Birthday Wish</p>
          <h2>Your message goes here</h2>
          <p className="card-text">
            Replace this text with your real birthday message. Write something
            sweet, personal, and emotional here about your friendship, how much
            she means to you, and how excited you are for today.
          </p>
        </article>

        <article className="card scratch-card">
          <p className="section-label">Today’s Surprise Plan</p>
          <h2>Scratch to reveal</h2>

          <div className="plan-preview">
            <div className="plan-item">
              <span className="plan-time">9:00</span>
              <div>
                <h3>Epoxy Workshop</h3>
                <p>Add location + little note here</p>
              </div>
            </div>

            <div className="plan-item">
              <span className="plan-time">After</span>
              <div>
                <h3>Butterfly Cafe</h3>
                <p>Add location + little note here</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="places-section">
        <div className="section-heading">
          <p className="section-label">Our Birthday Stops</p>
          <h2>Places for today</h2>
        </div>

        <div className="places-grid">
          <article className="card place-card">
            <div className="image-placeholder">Add place image here</div>
            <h3>Epoxy Workshop</h3>
            <p className="card-text">
              Put the location, address, or Google Maps link here.
            </p>
          </article>

          <article className="card place-card">
            <div className="image-placeholder">Add place image here</div>
            <h3>Butterfly Cafe</h3>
            <p className="card-text">
              Put the location, address, or Google Maps link here.
            </p>
          </article>
        </div>
      </section>

      <section className="memories-section">
        <div className="section-heading">
          <p className="section-label">Through The Years</p>
          <h2>Our memories</h2>
        </div>

        <div className="memories-grid">
          <div className="memory-card tall">Add your photo here</div>
          <div className="memory-card">Add your photo here</div>
          <div className="memory-card">Add your photo here</div>
          <div className="memory-card wide">Add your photo here</div>
          <div className="memory-card">Add your photo here</div>
        </div>
      </section>
    </main>
  );
}

export default App;