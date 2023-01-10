import React from "react";
import { FaAngleUp } from "react-icons/fa";

const TopButton = () => {
  return (
    <div>
      <a href="#home">
        <button className="top-button" title="back to top">
          <FaAngleUp />
        </button>
      </a>
    </div>
  );
};

export default TopButton;
