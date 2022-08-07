import React from "react";
import LatestWorks from "../../data/LatestWorks";

const LatestWorkList = () => {
  return (
    // eslint-disable-next-line
    <>
      <ul className="latest-works-list grid grid-flow-col grid-row-1">
        {LatestWorks.map((latestWorkList) => {
          return (
            <li className="latest-work-list mr-12 text-left" key={latestWorkList.id}>
              <img src={latestWorkList.image} alt="latest work" className="" />
              <h2 className="latest-work-title font-medium text-lg mt-2">
                {latestWorkList.title}
              </h2>
              <p className="latest-work-dexcription font-light text-xs text-grey mt-1">
                {latestWorkList.caption}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LatestWorkList;
