import VisionImg from "../../assets/IMG/VisionImg.svg";
import MissionImg from "../../assets/IMG/MissionImg.svg";
import GoalImg from "../../assets/IMG/GoalImg.svg";

const ourMissionData = [
  {
    id: "01",
    title: "VISION",
    image: VisionImg,
    details:
      "Ut egestas augue ac molestie pharetra. Sed porta dui quis imperdiet Morbi egestas enim ut nibh faucibu consectetur varius sem id felis…",
  },
  {
    id: "02",
    title: "MISSION",
    image: MissionImg,
    details:
      "Ut egestas augue ac molestie pharetra. Sed porta dui quis imperdiet Morbi egestas enim ut nibh faucibu consectetur varius sem id felis…",
  },
  {
    id: "03",
    title: "GOAL",
    image: GoalImg,
    details:
      "Ut egestas augue ac molestie pharetra. Sed porta dui quis imperdiet Morbi egestas enim ut nibh faucibu consectetur varius sem id felis…",
  },
];

const OurMission = () => {
  return (
    <div>
      <div className="our-mission-title text-center mb-20" id="our-mission">
        <h2 className="text-3xl">OUR MISSION</h2>
      </div>
      <ul className="flex mb-36 items-center justify-around">
        {ourMissionData.map((data) => {
          return (
            <li key={data.id} className="w-80">
              <h2 className="text-left mb-3">{data.title}</h2>
              <img src={data.image} alt="vision img" />
              <div className="details-mission mt-4">
                <p className="text-xs font-extralight text-grey">{data.details}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurMission;
