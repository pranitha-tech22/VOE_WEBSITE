import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-vision">

      <div className="mission-vision-container">

        {/* Section Heading */}
        <div className="mv-heading">
          <p>WHO WE ARE</p>

          <h2>
            Our Vision & <span>Mission</span>
          </h2>

          <div className="mv-line"></div>
        </div>


        {/* Vision & Mission Cards */}
        <div className="mv-grid">

          {/* Vision */}
          <div className="mv-card">

            <div className="mv-number">
              01
            </div>

            <div className="mv-icon">
              ◇
            </div>

            <h3>
              OUR VISION
            </h3>

            <p>
              To build a connected and empowered campus community
              where every Easwarian has the confidence and opportunity
              to share their voice, ideas, and creativity.
            </p>

          </div>


          {/* Mission */}
          <div className="mv-card">

            <div className="mv-number">
              02
            </div>

            <div className="mv-icon">
              ◈
            </div>

            <h3>
              OUR MISSION
            </h3>

            <p>
              To create meaningful opportunities for students to
              connect, collaborate, innovate, and lead through
              technology, creativity, events, and campus initiatives.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;