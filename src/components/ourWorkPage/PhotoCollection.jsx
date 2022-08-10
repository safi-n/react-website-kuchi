import React from "react";
import { HashLink } from "react-router-hash-link";
import photoCollectionList from "../../data/PhotoCollection";
const PhotoCollection = () => {
  return (
    <div className="ow-photo-collection-container mb-20">
      <div className="photo-collection-title text-center">
        <h2 className="text-3xl font-light">
          OUR PHOTOS <span className="font-medium">COLLECTION</span>
        </h2>
      </div>
      <div className="photo-collection-page-nav ml-16 pt-16">
        <HashLink to="/projects#test">
          <span className="text-md font-extralight bg-primary p-2">
            DISCOVER MORE
          </span>
        </HashLink>
      </div>
      <div className="collection-photos ml-2 pl-14 pr-14 py-6">
        <ul className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-3">
          {photoCollectionList.map((photo) => {
            return (
              <li key={photo.id}>
                <img src={photo.image} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PhotoCollection;
