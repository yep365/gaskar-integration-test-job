import React from "react";
import { useSelector } from "react-redux";

import { NavSelect } from "../../components";

import Logo from "../../assets/Sidebar-logo.png";

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
        { text: "Вот это возможность", newTasks: "3" },
        { text: "А эта тем более", newTasks: "1" },
        { text: "Это просто невероятно", newTasks: "1" },
      ],
    },
  ];
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={Logo} alt={Logo} />
      <div className="sidebar-content">
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
    </div>
  );
};

export default Sidebar;
