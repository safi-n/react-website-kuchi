import React from "react";

const LatestWorkList = () => {
  const latestWorksDocumentaries = [
    {
      id: "01",
      image: "../assets/IMG/kuchiBaba.jpg",
      title: "Black & White",
      caption:
        "loremIspus Dang with damn and damn with Daang are the barfing words that descripbe a personality have a good luck dear",
    },
    {
      id: "02",
      image: "../assets/IMG/kuchiBaba.jpg",
      title: "Hello It me",
      caption:
        "loremIspus Dang with damn and damn with Daang are the barfing words that descripbe a personality have a good luck dear",
    },
    {
      id: "03",
      image: "../assets/IMG/kuchiBaba.jpg",
      title: "Black & Greeb",
      caption:
        "loremIspus Dang with damn and damn with Daang are the barfing words that descripbe a personality have a good luck dear",
    },
    {
      id: "04",
      image: "../assets/IMG/kuchiBaba.jpg",
      title: "the phenix",
      caption:
        "loremIspus Dang with damn and damn with Daang are the barfing words that descripbe a personality have a good luck dear",
    },
  ];
  return (
    // eslint-disable-next-line
    <>
      <ul className="latest-works-list grid grid-flow-col grid-row-1">
      {latestWorksDocumentaries.map(latestWorkList => {
        return (
        <li className="latest-work-list mr-5">
          <img src={latestWorkList.image} alt="latest work" />
          <h2 className="latest-work-title font-medium mt-2">{latestWorkList.title}</h2>
        <p className="latest-work-dexcription font-light text-xs text-grey mt-1">
          {latestWorkList.caption}
        </p>
        </li>
        )
      })}
      </ul>
    </>
  );
};

export default LatestWorkList;
