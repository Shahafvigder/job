import React, { useEffect, useState } from "react";
import { getAllphotos } from "../services/photos.services";
import "./allPhotos.css";
const AllPhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  console.log(photos);
  useEffect(() => {
    async function fetchPhotos() {
      const data = await getAllphotos();
      setPhotos(data);
    }
    fetchPhotos();
  }, []);

  const handleNextClick = () => {
    const first = 9
    const last = 18
    return (first,last)
  };

  return (
    <>
      <h1 className="title">pixbay home assigment</h1>
      <div className="prevAndnextButtons">
        <button className="prev">prev</button>
        <button className="next">next</button>
      </div>
      <div className="grid-container">
        {photos.map((photo) => (
          <div className="singlelPhoto" key={photo.key}>
            <img className="image" src={photo.previewURL} alt=""></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPhotosPage;
