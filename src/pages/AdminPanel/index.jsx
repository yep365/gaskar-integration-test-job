import React from "react";

import { Sidebar, Main } from "../../components";

import "./AdminPanel.sass";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div className="admin-panel__sidebar">
        <Sidebar />
      </div>
      <Main />
    </div>
  );
};

export default AdminPanel;
