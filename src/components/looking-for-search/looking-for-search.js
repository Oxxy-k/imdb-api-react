import "./looking-for-search.css";
import React from "react";

const LookingForSearch = ({ errorMessage }) => {
  return (
    <div className="empty-screen">
      <h2 className="enjoy">
        {errorMessage
          ? "Sorry, your " + errorMessage.toLowerCase()
          : "Enjoy watching films with us!"}
      </h2>
      <img
        className="screen-picture"
        src="https://pngimage.net/wp-content/uploads/2018/06/flat-screen-tv-on-wall-png-2.png"
        alt="Screen"
      ></img>
    </div>
  );
};

export default LookingForSearch;
