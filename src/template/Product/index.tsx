import React from "react";
import { Balance, Button, Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

const PaymentTemplate = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/client");
  };
  return (
    <div>
      <Navbar route={1} />
      <Balance />
      <h1>Essa é a pagina de Pagamentos</h1>
      <Button
        i18nPath="home.form.btn.fourthBtn"
        type="fill"
        BGcolor="primary"
        onClick={handleNavigate}
      />
    </div>
  );
};
export default PaymentTemplate;
