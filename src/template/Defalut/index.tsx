import React from "react";
import { Balance, Button, Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

const DefaultTEmplate = () => {
  const navigate = useNavigate();

  const backToClient = () => {
    navigate("/client");
  };
  return (
    <div>
      <h1>URL Não encontrada </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          i18nPath="home.form.btn.fifthBtn"
          type="empty"
          color="secondary"
          onClick={backToClient}
        />
      </div>
    </div>
  );
};
export default DefaultTEmplate;
