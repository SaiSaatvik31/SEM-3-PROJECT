import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Stars({ stars, review }) {
  const ratingStars = Array.from({ length: 5 }, (ele, index) => {
    const num = index + 0.5;
    return (
      <span key={index} className="icon ml-2">
        {stars >= index + 1 ? (
          <FaStar className="icon-style" />
        ) : stars >= num ? (
          <FaStarHalfAlt className="icon-style" />
        ) : (
          <AiOutlineStar className="icon-style" />
        )}
      </span>
    );
  });

  return (
    <>
      <span style={{ display: "flex", textAlign: "center" }}>
        {ratingStars}
      </span>

      <span className="ml-3"> {stars}</span>
    </>
  );
}

export default Stars;
