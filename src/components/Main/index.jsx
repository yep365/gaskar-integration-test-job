import React, { useState } from "react";
import classNames from "classnames";

import Leonardo from "../../assets/people/Leonardo.jpg";
import Man from "../../assets/people/Man.jpg";

import "./Main.sass";

const Category = ({ text, selected, setselectedCategory, i }) => {
  const onSelectCategory = () => {
    setselectedCategory(i);
  };
  return (
    <div
      className={classNames("main-header__item", {
        "main-header__item--selected": selected,
      })}
      onClick={onSelectCategory}
    >
      {text}
    </div>
  );
};

const Main = () => {
  const [selectedCategory, setselectedCategory] = useState(0);
  const categories = [
    { title: "СПИСОК ПРОЕКТОВ" },
    { title: "ДОРОЖНЫЕ КАРТЫ" },
  ];

  return (
    <div className="main">
      <div className="main-topbar">
        <div className="main-topbar__account">
          <div className="badge">
            <img src={Man} alt={Man} />
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="main-header">
          <div className="main-header__title">
            <h1>ПРОЕКТЫ</h1>
          </div>
          <div className="main-header__menu">
            {categories?.map((category, i) => (
              <Category
                text={category.title}
                key={category.title}
                selected={selectedCategory === i}
                setselectedCategory={setselectedCategory}
                i={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
