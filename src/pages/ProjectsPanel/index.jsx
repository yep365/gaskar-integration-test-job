import React, { useState } from "react";

import {
  ProjectsCategory,
  Button,
  CreateProjectModal,
  Card,
} from "../../components";

import SortTabs from "../../assets/SortTabs.png";
import SortTabs1 from "../../assets/SortTabs1.png";

import "./ProjectsPanel.sass";

const ProjectsPanel = () => {
  const [selectedCategory, setselectedCategory] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  let type = "Медицина";
  let status = "Строится";
  let projectName = "Hadassah Medical";
  let title = "ТЕРАПЕВТИЧЕССКИЙ КОРПУС";
  let startDate = "08.04.2019";
  let endDate = "31.01.2021";
  let manager = "Денис Конев";
  let admin = "Гросолим Лимитед";
  let background = "https://arkrealty.ru/upload/images/nevatowers_20.jpg";
  const categories = [
    { title: "СПИСОК ПРОЕКТОВ" },
    { title: "ДОРОЖНЫЕ КАРТЫ" },
  ];
  const onModalOpen = () => {
    setModalOpen(true);
  };
  const onCancelModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="projects-header">
        <div className="projects-header__title">
          <h1>ПРОЕКТЫ</h1>
        </div>
        <div className="projects-header__menu">
          {categories?.map((category, i) => (
            <ProjectsCategory
              text={category.title}
              key={category.title}
              selected={selectedCategory === i}
              setselectedCategory={setselectedCategory}
              i={i}
            />
          ))}
        </div>
      </div>
      <div className="projects-info">
        <div className="projects-info__title">
          {categories?.[selectedCategory].title}
        </div>
        <div className="projects-info__control">
          <div className="projects-control__btn">
            <Button
              text="Добавить проект"
              small
              fontSize={18}
              onClick={onModalOpen}
            />
          </div>
        </div>
      </div>
      <div className="projects-control__sort">
        <img
          className="projects-control__selector"
          src={SortTabs}
          alt={SortTabs}
        />
        <img
          className="projects-control__selector"
          src={SortTabs1}
          alt={SortTabs1}
        />
      </div>
      <div className="projects-field">
        <div className="projects-field__card">
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
        <div className="projects-field__card">
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
        <div className="projects-field__card">
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
        <div className="projects-field__card">
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
        <div className="projects-field__card">
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
        <div className="projects-field__card">
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
        <div className="projects-field__card">
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
        <div className="projects-field__card">
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
        <div className="projects-field__card">
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
      <CreateProjectModal visible={modalOpen} onCancel={onCancelModal} />
    </>
  );
};

export default ProjectsPanel;
