import React from "react";

import "./Badge.sass";

const Badge = ({ imgUrl, onClick }) => {
  return (
    <div className="badge" onClick={onClick}>
      <img src={imgUrl} alt={imgUrl} />
    </div>
  );
};

export default Badge;
