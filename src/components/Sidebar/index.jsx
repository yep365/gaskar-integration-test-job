import React from "react";
import { useSelector } from "react-redux";

import { NavSelect } from "../../components";

import "./Sidebar.sass";

const Sidebar = () => {
  const { acitveNavbar, acitveSubNavbar } = useSelector(
    ({ sidebar }) => sidebar
  );

  const sidebarArr = [
    {
      title: "Задачи и работы",
      newTasks: "3",
    },
    {
      title: "Проекты",
      newTasks: "",
    },
    {
      title: "Календарь",
      newTasks: "",
    },
    {
      title: "Возможности",
      newTasks: "5",
      dropDownItems: [
        { text: "Вот это возможность", newTasks: "4" },
        { text: "А эта тем более", newTasks: "1" },
        { text: "Это просто невероятно", newTasks: "1" },
      ],
    },
  ];
  return (
    <div className="sidebar">
      {sidebarArr?.map((item, i) => (
        <NavSelect
          index={i}
          key={i}
          text={item.title}
          newTasks={item.newTasks}
          dropDownItems={item.dropDownItems}
          acitveSubNavbar={acitveSubNavbar}
          selected={acitveNavbar === i}
          acitveNavbar={acitveNavbar}
        />
      ))}
    </div>
  );
};

export default Sidebar;
