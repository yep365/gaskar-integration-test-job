import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { NavSelect } from "../../components";
import { sidebarActions } from "../../redux/actions";
import { getPathnameIndex } from "../../utils/helpers";

import Logo from "../../assets/Sidebar-logo.png";

import "./Sidebar.sass";

const Sidebar = ({ setOpenBurger }) => {
  const { acitveNavbar, acitveSubNavbar } = useSelector(
    ({ sidebar }) => sidebar
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const sidebarArr = [
    {
      title: "Задачи и работы",
      newTasks: "3",
      link: "/tasks",
    },
    {
      title: "Проекты",
      newTasks: "",
      link: "/projects",
    },
    {
      title: "Календарь",
      newTasks: "",
      link: "/calendar",
    },
    {
      title: "Возможности",
      newTasks: "5",
      dropDownItems: [
        {
          text: "Вот это возможность",
          newTasks: "3",
          link: "/opportunity/1",
        },
        {
          text: "А эта тем более",
          newTasks: "1",
          link: "/opportunity/2",
        },
        {
          text: "Это просто невероятно",
          newTasks: "1",
          link: "/opportunity/3",
        },
      ],
      link: "opportunity",
    },
  ];

  useEffect(() => {
    if (history.location.pathname) {
      const { index, nestedIndex } = getPathnameIndex(sidebarArr, history);

      dispatch(sidebarActions.setActiveNavbar(index));
      dispatch(sidebarActions.setActiveSubNavbar(nestedIndex));
    }
  }, [history.location.pathname]);

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
            link={item.link}
            setOpenBurger={setOpenBurger}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
