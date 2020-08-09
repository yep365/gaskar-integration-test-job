import { postNewProjectSimulator, openNotification } from "../../utils/helpers";

const Actions = {
  addNewProject: (projectObj) => (dispatch, getState) => {
    const {
      title,
      startDate,
      endDate,
      manager,
      administrator,
      imageUrl,
    } = projectObj;
    const {
      projects: { projectsArr },
    } = getState();
    let postData = {
      title: title,
      date: {
        startDate: startDate.split("-").join("."),
        endDate: endDate.split("-").join("."),
      },
      manager: manager,
      administrator: administrator,
      imageUrl:
        imageUrl ?? "https://arkrealty.ru/upload/images/nevatowers_20.jpg",
      percentComplited: "70",
    };
    postNewProjectSimulator(postData)
      .then(({ status }) => {
        if (status === "204") {
          openNotification({
            type: "success",
            title: "Проект был успешно добавлен!",
          });
          dispatch({
            type: "PROJECTS:ADD_PROJECT",
            payload: Array(postData).concat(projectsArr),
          });
        } else {
          openNotification({
            type: "error",
            title: "Произошла ошибка, перезайдите в аккаунт",
          });
        }
      })
      .catch(() => {
        openNotification({
          type: "error",
          title: "Произошла ошибка загрузки, повтроите позднее!",
        });
      });
  },
};
export default Actions;
