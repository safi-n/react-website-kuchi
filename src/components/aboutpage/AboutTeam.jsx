import React from "react";
import MeetTeamData from "../../data/MeetTeamData";
const AboutTeam = () => {
  return (
    <>
      <div className="meet-team-conatiner">
        <div className="meet-team-title text-center">
          <h2 className="font-light text-3xl">
            MEET THE <span className="font-medium">TEAM</span>
          </h2>
        </div>
        <div className="meet-team-info flex flex-col">
          <ul>{MeetTeamData.map(person => {
            return (
              <li key={person.id}>
                <img src={person.image} alt="team mate" />
                <h2>{person.name}</h2>
                <h2>{person.position}</h2>
                <p>{person.biography}</p>
              </li>
            )
          })}</ul>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
