import React from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../../redux/actions";
import { Badge } from "../../components";

const Header = () => {
  const dispatch = useDispatch();
  const onProfileClick = () => {
    dispatch(authActions.logOut());
  };
  return (
    <div className="main-topbar">
      <div className="main-topbar__account">
        <Badge
          onClick={onProfileClick}
          imgUrl="https://mediaproxy.salon.com/width/1200/height/1200/https://media.salon.com/2019/04/suprised-man.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
