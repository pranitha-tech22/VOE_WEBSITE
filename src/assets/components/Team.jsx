import "./Team.css";

const teams = {
  "Content Team": [
    ["Raagini Ramakrishnan", "CSD"],
    ["Kanika P", "ECE"],
    ["Thiviya Dharshan R", "AIML"],
    ["Sambhavi S", "IT"],
    ["Mitra S", "ECE"],
    ["Praveena L", "CSE"],
  ],

  "Direction & Editing Team": [
    ["Nitheesh", "CSE"],
    ["Aishwarya S", "AI & DS"],
    ["Hariharan K", "ECE"],
    ["Sathvika A", "IT"],
    ["Pranavi A", "CSE"],
    ["Sahana S", "ECE"],
    ["Ferinand", "Robotics & Automation"],
  ],

  "Campus Outreach Team": [
    ["Priyavagulaa K", "CSE"],
    ["Aparajitha B M", "ECE"],
    ["Nitish Kumar R V", "Mechanical"],
    ["Rubinaath K P", "CSE"],
    ["Jai Harini P", "CSE - AIML"],
    ["Akshaya Vijay", "CSBS"],
  ],

  "Event Management Team": [
    ["Ananya Sinha", "Robotics and Automation"],
    ["Sujita H", "CSE"],
    ["Harini M J", "AIML"],
    ["Priyanka J", "CSE"],
    ["Raghul S", "CSE"],
  ],

  "Technical Team": [
    ["Mohith Dharshan", "CSE"],
    ["Sahhana N", "CSE"],
    ["Pranitha P", "CSE"],
  ],
};

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-container">

        <div className="team-heading">
          <p>TECH • INNOVATE • CONNECT</p>
          <h1>OUR TEAM</h1>
          <span>Meet the minds behind VOE</span>
        </div>

        <div className="team-grid">
          {Object.entries(teams).map(([teamName, members]) => (
            <details className="team-card" key={teamName}>
              <summary>
                <span>{teamName}</span>
                <b>+</b>
              </summary>

              <div className="members">
                {members.map(([name, department]) => (
                  <div className="member-card" key={name}>
                    <h3>{name}</h3>
                    <p>{department}</p>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;