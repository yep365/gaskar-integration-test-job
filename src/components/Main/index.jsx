import React, { useState, useEffect } from "react";
import classNames from "classnames";
import HamburgerMenu from "react-hamburger-menu";

import {
  Button,
  Badge,
  Card,
  CreateProjectModal,
  Sidebar,
} from "../../components";

import SortTabs from "../../assets/SortTabs.png";
import SortTabs1 from "../../assets/SortTabs1.png";

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
  const [openBurger, setOpenBurger] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const categories = [
    { title: "СПИСОК ПРОЕКТОВ" },
    { title: "ДОРОЖНЫЕ КАРТЫ" },
  ];

  let type = "Медицина";
  let status = "Строится";
  let projectName = "Hadassah Medical";
  let title = "ТЕРАПЕВТИЧЕССКИЙ КОРПУС";
  let startDate = "08.04.2019";
  let endDate = "31.01.2021";
  let manager = "Денис Конев";
  let admin = "Гросолим Лимитед";
  let background = "https://arkrealty.ru/upload/images/nevatowers_20.jpg";

  window.addEventListener(
    "orientationchange",
    function () {
      window.location.reload(false);
    },
    false
  );

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onCancelModal = () => {
    setModalOpen(false);
  };

  const onBurgerClick = () => {
    setOpenBurger(!openBurger);
  };
  return (
    <>
      {openBurger && window.innerWidth <= 750 && (
        <div className="main-mobile__sidebar">
          <Sidebar />
        </div>
      )}
      <div className="main-mobile__burger">
        <HamburgerMenu
          isOpen={openBurger}
          width={18}
          height={18}
          strokeWidth={3}
          rotate={0}
          color="#b331cb"
          borderRadius={0}
          animationDuration={0.2}
          menuClicked={onBurgerClick}
        />
      </div>
      <div
        className={classNames("main", {
          "main--sidebar": openBurger,
        })}
      >
        <div className="main-topbar">
          <div className="main-topbar__account">
            <Badge imgUrl="https://mediaproxy.salon.com/width/1200/height/1200/https://media.salon.com/2019/04/suprised-man.jpg" />
          </div>
          {/* <div className="main-topbar__burger">
            <HamburgerMenu
              isOpen={openBurger}
              width={18}
              height={18}
              strokeWidth={3}
              rotate={0}
              color="#b331cb"
              borderRadius={0}
              animationDuration={0.2}
              menuClicked={onBurgerClick}
            />
          </div> */}
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
          <div className="main-info">
            <div className="main-info__title">
              {categories?.[selectedCategory].title}
            </div>
            <div className="main-info__control">
              <div className="main-control__btn">
                <Button
                  text="Добавить проект"
                  small
                  fontSize={18}
                  onClick={onModalOpen}
                />
              </div>
            </div>
          </div>
          <div className="main-control__sort">
            <img
              className="main-control__selector"
              src={SortTabs}
              alt={SortTabs}
            />
            <img
              className="main-control__selector"
              src={SortTabs1}
              alt={SortTabs1}
            />
          </div>
          <div className="main-field">
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
            <div className="main-field__card">
              <Card
                type={type}
                status={status}
                projectName={projectName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                manager={manager}
                admin={admin}
                background={background}
                percent={65}
              />
            </div>
          </div>
        </div>

        <CreateProjectModal visible={modalOpen} onCancel={onCancelModal} />
      </div>
    </>
  );
};

export default Main;
