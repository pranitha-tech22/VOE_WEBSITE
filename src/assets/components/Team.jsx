import "./Team.css";

const teams = {
  "Content Team": {
    admin: [["Sai Sivani K", "CSE"]],
    members: [
      ["Raagini Ramakrishnan", "CSD"],
      ["Kanika P", "ECE"],
      ["Thiviya Dharshan R", "AIML"],
      ["Sambhavi S", "IT"],
      ["Mitra S", "ECE"],
      ["Praveena L", "CSE"],
    ],
  },

  "Direction & Editing Team": {
    admin: [
      ["Harish Balaji", "CSE"],
      ["Raghav G S", "CSE"],
    ],
    members: [
      ["Nitheesh", "CSE"],
      ["Aishwarya S", "AI & DS"],
      ["Hariharan K", "ECE"],
      ["Sathvika A", "IT"],
      ["Pranavi A", "CSE"],
      ["Sahana S", "ECE"],
      ["Ferinand", "Robotics & Automation"],
    ],
  },

  "Campus Outreach Team": {
    admin: [
      ["Prathyum S", "CSE"],
      ["Pritika KK", "CSE"],
    ],
    members: [
      ["Priyavagulaa K", "CSE"],
      ["Aparajitha B M", "ECE"],
      ["Nitish Kumar R V", "Mechanical"],
      ["Rubinaath K P", "CSE"],
      ["Jai Harini P", "CSE - AIML"],
      ["Akshaya Vijay", "CSBS"],
    ],
  },

  "Event Management Team": {
    admin: [
      ["Lenya", "ECE"],
    ],
    members: [
      ["Ananya Sinha", "Robotics and Automation"],
      ["Sujita H", "CSE"],
      ["Harini M J", "AIML"],
      ["Priyanka J", "CSE"],
      ["Raghul S", "CSE"],
    ],
  },

  "Technical Team": {
    admin: [
      ["Rehan J", "CSE"],
    ],
    members: [
      ["Ranjithan", "CSE"],
      ["Rohith", "CSE"],
      ["Mohith Dharshan", "CSE"],
      ["Sahhana N", "CSE"],
      ["Pranitha P", "CSE"],
    ],
  },
};

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-container">

        {/* HEADING */}
        <div className="team-heading">
          <p>TECH • INNOVATE • CONNECT</p>

          <h1>OUR TEAM</h1>

          <span>Meet the minds behind VOE</span>
        </div>


        {/* LEADERSHIP */}
        <div className="team-leadership">

          <div className="faculty-incharge">
            <p>FACULTY IN-CHARGE</p>
            <h2>Anandhi</h2>
          </div>

          <div className="leadership-card">
            <p>PRESIDENT</p>
            <h2>Gurusamy</h2>
            <span>ECE</span>
          </div>

          <div className="leadership-card">
            <p>VICE PRESIDENT</p>
            <h2>Sai Nandhitha</h2>
            <span>CSE</span>
          </div>

        </div>


        {/* TEAM GRID */}
        <div className="team-grid">

          {Object.entries(teams).map(
            ([teamName, team]) => (

              <details
                className="team-card"
                key={teamName}
              >

                <summary>
                  <span>{teamName}</span>
                  <b>+</b>
                </summary>


                <div className="members">

                  {/* ADMIN AT TOP */}
                  <div className="team-admin-section">

                    <p className="team-admin-title">
                      TEAM ADMIN
                    </p>

                    <div className="team-admin-grid">

                      {team.admin.map(
                        ([name, department]) => (

                          <div
                            className="team-admin-card"
                            key={name}
                          >
                            <h3>{name}</h3>
                            <p>{department}</p>
                          </div>

                        )
                      )}

                    </div>

                  </div>


                  {/* EXISTING MEMBERS */}
                  <div className="team-members-section">

                    <p className="team-members-title">
                      TEAM MEMBERS
                    </p>

                    <div className="member-grid">

                      {team.members.map(
                        ([name, department]) => (

                          <div
                            className="member-card"
                            key={name}
                          >
                            <h3>{name}</h3>
                            <p>{department}</p>
                          </div>

                        )
                      )}

                    </div>

                  </div>

                </div>

              </details>

            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Team;