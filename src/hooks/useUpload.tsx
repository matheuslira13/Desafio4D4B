import { useNavigate } from "react-router-dom";

export const useUpload = () => {
  const navigate = useNavigate();
  const handleGoTOPayment = () => {
    navigate("/payment");
  };
  const handlebackClient = () => {
    navigate("/client");
  };

  const maxSize = 10;
  return {
    handleGoTOPayment,
    handlebackClient,
    maxSize,
  };
};
