import React from "react";

import { Badge, ProgressBar } from "../../components";

import Person from "../../assets/Person.png";
import Rub from "../../assets/Rub.png";
import Calendar from "../../assets/Calendar.png";

import "./Card.sass";

const Card = ({
  type,
  status,
  projectName,
  title,
  startDate,
  endDate,
  manager,
  administrator,
  imageUrl,
  percent,
}) => {
  const contributingPeople = [
    {
      imgUrl:
        "https://i.pinimg.com/236x/6c/1c/4a/6c1c4aa11ab0f0790b69ebfcf2e79707--body-anatomy-anatomy-study.jpg",
    },
    {
      imgUrl:
        "https://star24.tv/wp-content/uploads/2015/02/star24-tv-scarlett-johansson-oscars-quatre-mini.jpg",
    },
    {
      imgUrl:
        "https://sun9-5.userapi.com/c855236/v855236940/22bf28/R82pfY_g_Xw.jpg",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/07/20/13/01/fred-852770__340.jpg",
    },
  ];
  return (
    <div className="card">
      <div
        className="card-overview"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="card-overview__header">
          <div className="card-overview__type">{type ?? "Медицина"}</div>
          <div className="card-overview__status">{status ?? "Строится"}</div>
        </div>
        <div className="card-overview__name">
          {projectName ?? "Hadassah Medical"}
        </div>
      </div>
      <div className="card-info">
        <div className="card-info__title">{title}</div>
        <div className="card-info__docs">
          <div className="card-info__credential">
            <img className="card-info__img" src={Calendar} alt={Calendar} />
            <div className="card-info__description">{`${startDate} - ${endDate} г.г.`}</div>
          </div>
          <div className="card-info__credential">
            <img className="card-info__img" src={Person} alt={Person} />
            <div className="card-info__description">{manager}</div>
          </div>
          <div className="card-info__credential">
            <img className="card-info__img" src={Rub} alt={Rub} />
            <div className="card-info__description">{administrator}</div>
          </div>
        </div>
        <div className="card-info__bottom">
          <div className="card-info__people">
            {contributingPeople?.map((contributor) => (
              <div className="card-info__human" key={contributor.imgUrl}>
                <Badge imgUrl={contributor.imgUrl} />
              </div>
            ))}
          </div>
          <div className="card-info__progress">
            <ProgressBar squareSize={31} strokeWidth={5} percentage={percent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
