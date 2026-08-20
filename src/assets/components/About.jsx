import "./About.css";

function About() {
  return (
    <section className="about-page">

      {/* =========================
          ABOUT INTRO
      ========================= */}

      <div className="about-intro">

        <p className="about-label">
          ABOUT VOE
        </p>

        <h1>
          More Than A Club.
          <span> A Community.</span>
        </h1>

        <p className="about-description">
          VOICE OF EASWARIANS (VOE) is a student-driven community
          created to bring Easwarians together through technology,
          creativity, collaboration, and meaningful campus experiences.
        </p>

        <p className="about-description">
          VOE provides a platform where students can express their ideas,
          explore their interests, develop new skills, and work together
          to create an active and connected campus community.
        </p>

      </div>


      {/* =========================
          CORE VALUES
      ========================= */}

      <div className="about-values">

        <div className="about-value-card">
          <span>01</span>

          <h2>CREATE</h2>

          <p>
            Turn ideas into projects, experiences, and initiatives.
          </p>
        </div>


        <div className="about-value-card">
          <span>02</span>

          <h2>CONNECT</h2>

          <p>
            Bring students together and build meaningful communities.
          </p>
        </div>


        <div className="about-value-card">
          <span>03</span>

          <h2>LEAD</h2>

          <p>
            Encourage students to take initiative and develop leadership.
          </p>
        </div>


        <div className="about-value-card">
          <span>04</span>

          <h2>INSPIRE</h2>

          <p>
            Motivate students to explore, innovate, and make an impact.
          </p>
        </div>

      </div>


      {/* =========================
          WHAT WE DO
      ========================= */}

      <div className="about-activities">

        <div className="activities-heading">

          <p>
            WHAT WE DO
          </p>

          <h2>
            Turning Ideas Into
            <span> Experiences.</span>
          </h2>

        </div>


        <div className="activities-grid">

          <div className="activity">
            <span>01</span>
            <h3>TECHNOLOGY & INNOVATION</h3>
            <p>
              Encouraging students to explore technology,
              build ideas, and innovate.
            </p>
          </div>

          <div className="activity">
            <span>02</span>
            <h3>CREATIVE ACTIVITIES</h3>
            <p>
              Creating opportunities for students to express
              their creativity and ideas.
            </p>
          </div>

          <div className="activity">
            <span>03</span>
            <h3>EVENTS & ACTIVITIES</h3>
            <p>
              Organising engaging experiences that bring
              students together.
            </p>
          </div>

          <div className="activity">
            <span>04</span>
            <h3>COLLABORATION</h3>
            <p>
              Building a culture where students learn and
              grow together.
            </p>
          </div>

          <div className="activity">
            <span>05</span>
            <h3>SKILL DEVELOPMENT</h3>
            <p>
              Helping students discover and develop skills
              beyond the classroom.
            </p>
          </div>

          <div className="activity">
            <span>06</span>
            <h3>STUDENT INITIATIVES</h3>
            <p>
              Providing a platform for students to turn
              their ideas into meaningful initiatives.
            </p>
          </div>

        </div>

      </div>


      {/* =========================
          WHY VOE
      ========================= */}

      <div className="why-voe">

        <p className="about-label">
          WHY VOE?
        </p>

        <h2>
          More Than A Club.
          <br />
          <span>A Community Of Voices.</span>
        </h2>

        <p>
          VOE gives every Easwarian a space to learn,
          collaborate, experiment, contribute, and make
          their voice heard beyond the classroom.
        </p>

      </div>

    </section>
  );
}

export default About;