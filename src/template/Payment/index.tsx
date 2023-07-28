import React from "react";
import { Balance, Button, Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

const ProductTemplate = () => {
  const navigate = useNavigate();
  const goToAgreement = () => {
    navigate("/agreement");
  };
  const backToDoc = () => {
    navigate("/doc");
  };
  return (
    <div>
      <Navbar route={4} />
      <Balance />

      <h1>Essa é a pagina de Produtos</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          i18nPath="home.form.btn.fourthBtn"
          type="fill"
          BGcolor="primary"
          onClick={goToAgreement}
        />

        <Button
          i18nPath="home.form.btn.fifthBtn"
          type="empty"
          color="secondary"
          onClick={backToDoc}
        />
      </div>
    </div>
  );
};
export default ProductTemplate;
