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
        src="http://bizness-master.com/wp-content/uploads/2016/08/monitor-1.png"
        alt="Screen"
      ></img>
    </div>
  );
};

export default LookingForSearch;
