import { useState } from 'react';
import BirthdayIntro from './components/BirthdayIntro';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <BirthdayIntro onStart={() => setHasStarted(true)} />;
  }

  return (
    <main className="page-shell">
      <section className="hero-section hero-section--main">
        <h1 className="hero-title">
          For Jojo
          <span>a little birthday world made with love ♡</span>
        </h1>

        <p className="hero-text">
          A sweet little website full of memories, surprises, and our birthday timeline for today.
        </p>
      </section>

      <section className="birthday-note-section">
        <article className="card card-large">
          <p className="section-label">Birthday Note</p>
          <h2>Your birthday message goes here</h2>
          <p className="card-text">
            Replace this with your real birthday message. Write something personal, emotional,
            and cute about your friendship, your best memories together, and why she means so much to you.
          </p>
        </article>
      </section>

      <section className="timeline-section">
        <div className="timeline-header">
          <p className="section-label">Birthday Timeline</p>
          <h2>The plan for our day</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          <article className="timeline-item timeline-item--left timeline-item--top">
            <div className="timeline-card">
              <p className="timeline-time">09:00 AM</p>
              <h3>Epoxy Workshop</h3>
             <p className="timeline-text">
  Add the location here and a cute note like:
  our first stop of the birthday day
</p>
            </div>
          </article>

          <article className="timeline-item timeline-item--right timeline-item--middle">
            <div className="timeline-card">
              <p className="timeline-time">After</p>
              <h3>Butterfly Cafe</h3>
              <p className="timeline-text">
                Add the location here and a note like:
                cute coffee, food, photos, and birthday gossip ♡
              </p>
            </div>
          </article>
        </div>
      </section>

    <section className="memories-section">
  <div className="section-heading">
    <p className="section-label">Through The Years</p>
    <h2>Our memories</h2>
  </div>

  <div className="memories-collage">
    <article className="memory-polaroid memory-polaroid--one">
      <div className="memory-polaroid__image">Add photo 1 here</div>
      <p className="memory-polaroid__caption">A favorite memory from us</p>
    </article>

    <article className="memory-polaroid memory-polaroid--two">
      <div className="memory-polaroid__image">Add photo 2 here</div>
      <p className="memory-polaroid__caption">Another moment to remember</p>
    </article>

    <article className="memory-polaroid memory-polaroid--three">
      <div className="memory-polaroid__image">Add photo 3 here</div>
      <p className="memory-polaroid__caption">One of our cutest photos</p>
    </article>

    <article className="memory-polaroid memory-polaroid--four">
      <div className="memory-polaroid__image">Add photo 4 here</div>
      <p className="memory-polaroid__caption">A day we never forgot</p>
    </article>

    <article className="memory-polaroid memory-polaroid--five">
      <div className="memory-polaroid__image">Add photo 5 here</div>
      <p className="memory-polaroid__caption">Another little memory</p>
    </article>
  </div>
</section>
    </main>
  );
}

export default App;