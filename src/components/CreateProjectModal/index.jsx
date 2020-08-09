import React from "react";
import { Modal } from "react-responsive-modal";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { Input, Button } from "../../components";
import { projectsActions } from "../../redux/actions";

import "react-responsive-modal/styles.css";

import "./CreateProjectModal.sass";

const CreateProjectModal = ({ visible, onCancel }) => {
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    startDate: "",
    endDate: "",
    manager: "",
    administrator: "",
    imageUrl: undefined,
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Введите название проекта"),
    startDate: Yup.date().required("Введите дату начала строительства"),
    endDate: Yup.date().required("Введите дату конца строительства"),
    manager: Yup.string().required("Введите Руководителя проекта"),
    administrator: Yup.string().required("Введите Администратора проекта"),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(projectsActions.addNewProject(values));
    onCancel();
    resetForm();
  };
  return (
    <Modal open={visible} onClose={onCancel} title="Добавить проект" center>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty, errors, validateForm }) => (
          <Form>
            <div className="create">
              <Input
                label="Название проекта"
                placeholder="Например: Корпус стоматологии"
                name="title"
                thin
              />
              <Input
                label="Дата начала строительства"
                name="startDate"
                type="date"
                thin
              />
              <Input
                label="Дата конца строительства"
                name="endDate"
                type="date"
                thin
              />
              <Input label="Руководитель проекта" name="manager" thin />
              <Input label="Администратор проекта" name="administrator" thin />
              <Input
                label="ImageURL"
                name="imageUrl"
                thin
                placeholder="Необязательно"
              />
              <Button text="Создать" />
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateProjectModal;
