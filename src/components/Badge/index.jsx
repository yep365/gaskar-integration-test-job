import React from "react";

import "./Badge.sass";

const Badge = ({ imgUrl }) => {
  return (
    <div className="badge">
      <img src={imgUrl} alt={imgUrl} />
    </div>
  );
};

export default Badge;
