import React from "react";
import MeetTeamData from "../../data/MeetTeamData";
const AboutTeam = () => {
  return (
    <>
      <div className="meet-team-conatiner" id="meet-team">
        <div className="meet-team-title text-center mb-20">
          <h2 className="font-light text-3xl">
            MEET THE <span className="font-medium">TEAM</span>
          </h2>
        </div>
        <div className="meet-team-info">
          <ul className="flex justify-between">{MeetTeamData.map(person => {
            return (
              <li key={person.id} className='p-8'>
                <img src={person.image} alt="team mate" className="mb-7 h-48"/>
                <h2 className="font-medium text-lg mb-3">{person.name}</h2>
                <h2 className="font-light italic text-md mb-2">{person.position}</h2>
                <p className="font-light text-sm text-justify text-grey">{person.biography}</p>
              </li>
            )
          })}</ul>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
