import React from "react";

const ImageModal = ({ data, closeModal }) => {
  return (
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
  );
};

export default ImageModal;
