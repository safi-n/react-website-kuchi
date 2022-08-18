import React from "react";
import PhotoWorkListData from "../../data/PhotoWorkListData";
const PhotoWorkList = () => {
  return (
    <>
      <ul
        className="photo-work-list-grid grid grid-flow-col grid-cols-3 grid-rows-2">
        {PhotoWorkListData.map((photo) => {
          return (
            <>
              <li key={photo.id} className="mr-14 mb-8">
                <img src={photo.image} alt="pho" className="capacityImg" />
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default PhotoWorkList;
