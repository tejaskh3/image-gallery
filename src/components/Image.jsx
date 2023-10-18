import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import ImageModal from "./ImageModel";
const Image = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Before: isModalOpen", isModalOpen);
    setIsModalOpen(true);
    console.log("After: isModalOpen", isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative group">
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
        onClick={openModal}
      />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container">
            <img
              src={data.urls.regular}
              alt={data.alt_description}
              className="max-h-screen max-w-screen-xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 flex flex-col justify-end items-center transition-opacity ">
        <div className="flex flex-row">
          <img
            src={data.user.profile_image.large}
            alt={data.user.name}
            className="rounded-full h-16 w-16"
          />
        </div>

        <span className="bg-white text-black px-2 py-1 rounded-full">
          <FcLike /> {data.likes}
        </span>
        <p className="text-white text-center">{data.description}</p>
      </div>
    </div>
  );
};

export default Image;
