import { useState } from 'react';
import BirthdayIntro from './components/BirthdayIntro';
import epoxyImg from './assets/images/epoxy.jpg';
import cafeImg from './assets/images/cafe.jpg';

import memory1 from './assets/images/memory1.jpg';
import memory2 from './assets/images/memory2.jpg';
import memory3 from './assets/images/memory3.jpg';
import memory4 from './assets/images/memory4.jpg';
import memory5 from './assets/images/memory5.jpg';

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
          <span>a little birthday world made with love</span>
        </h1>

        <p className="hero-text">
          A sweet little website full of memories, surprises, and our birthday timeline for today.
        </p>
      </section>

      <section className="birthday-note-section">
        <article className="card card-large">
          <p className="section-label">Birthday Note</p>
          <h2>For Jojo</h2>

<div className="birthday-message">
  <p>I don’t even know how to put into words how much you mean to me, but I’ll try anyway.</p>

  <p>
    You’re not just my best friend you’re my safe place, my comfort, and the person who makes everything feel lighter without even trying.
    Every memory we have together, from the smallest moments to the biggest ones, is something I carry with me all the time.
  </p>

  <p>
    I love how we can laugh at the dumbest things, talk for hours about nothing, and still never get tired of each other.
    I love how you understand me without me needing to explain everything.
    And I love that no matter what happens, I always know I have you.
  </p>

  <p>
    You make my life better just by being in it.
    And honestly, I don’t know what I would do without you.
  </p>

  <p>
    So today isn’t just your birthday it’s a celebration of you, of us, and of all the memories we’ve made and the ones we still have waiting for us.
  </p>

  <p>
    I hope this day feels as special as you are.
    You deserve everything good in this world.
  </p>

 <p className="birthday-signoff">Happy Birthday <span className="heart">♡</span></p>
</div>
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

    <img src={epoxyImg} alt="Epoxy Workshop" className="timeline-img" />
  </div>
</article>

         <article className="timeline-item timeline-item--right timeline-item--middle">
  <div className="timeline-card">
    <p className="timeline-time">After</p>
    <h3>Butterfly Cafe</h3>

    <img src={cafeImg} alt="Butterfly Cafe" className="timeline-img" />
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
            <div className="memory-polaroid__image">
              <img src={memory1} alt="Memory 1" />
            </div>
          </article>

          <article className="memory-polaroid memory-polaroid--two">
            <div className="memory-polaroid__image">
              <img src={memory2} alt="Memory 2" />
            </div>
          </article>

          <article className="memory-polaroid memory-polaroid--three">
            <div className="memory-polaroid__image">
              <img src={memory3} alt="Memory 3" />
            </div>
          </article>

          <article className="memory-polaroid memory-polaroid--four">
            <div className="memory-polaroid__image">
              <img src={memory4} alt="Memory 4" />
            </div>
          </article>

          <article className="memory-polaroid memory-polaroid--five">
            <div className="memory-polaroid__image">
              <img src={memory5} alt="Memory 5" />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;