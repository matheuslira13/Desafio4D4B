import React from "react";
import { Balance, Button, Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

const ProductTemplate = () => {
  const navigate = useNavigate();

  const backToPayment = () => {
    navigate("/payment");
  };
  return (
    <div>
      <Navbar route={5} />
      <Balance />

      <h1>Essa é a pagina de Contrato</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          i18nPath="home.form.btn.fifthBtn"
          type="empty"
          color="secondary"
          onClick={backToPayment}
        />
      </div>
    </div>
  );
};
export default ProductTemplate;
