const initialState = {
  projectsArr: [
    {
      title: "ТЕРАПЕВТИЧЕССКИЙ КОРПУС",
      date: { startDate: "08.04.2019", endDate: "31.01.2021" },
      manager: "Денис Конев",
      administrator: "Гросолим Лимитед",
      imageUrl:
        "https://kurortmed.ru/thumb/2/0l6Bgfk9Dhpajcn5KndyeQ/580r450/d/1_5.jpg",
      percentComplited: "68",
      projectName: "Daily Oafish",
    },
    {
      title: "ХИРУРГИЧЕСКИЙ КОРПУС",
      date: { startDate: "17.01.2019", endDate: "05.04.2021" },
      manager: "Александр Смирнов",
      administrator: "Примьер Госпитал",
      imageUrl:
        "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/1e339293-5465-4d15-a687-492a2a973408/",
      percentComplited: "50",
      projectName: "Yam Bypass",
    },
    {
      title: "ТРАВМАТОЛОГИЧЕСКИЙ КОРПУС",
      date: { startDate: "02.08.2017", endDate: "11.10.2025" },
      manager: "Дмитрий Краснов",
      administrator: "Еспешиал Хирургигс",
      imageUrl:
        "https://ruherald.com/wp-content/uploads/2016/11/hospitalsum17a.jpg",
      percentComplited: "30",
      projectName: "Marked Footrest",
    },
  ],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PROJECTS:ADD_PROJECT":
      return {
        ...state,
        projectsArr: payload,
      };

    default:
      return state;
  }
};
