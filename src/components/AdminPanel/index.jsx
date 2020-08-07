import React from "react";

import { Sidebar, Main } from "../../components";

import "./AdminPanel.sass";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Sidebar />
      <Main />
    </div>
  );
};

export default AdminPanel;
