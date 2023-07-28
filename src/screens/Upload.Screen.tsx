import UploadTemplate from "../template/Upload";
import { useUpload } from "../hooks/useUpload";

export const UploadScreen = () => {
  const { handleGoTOPayment, handlebackClient, maxSize } = useUpload();
  return (
    <UploadTemplate
      handleGoTOPayment={handleGoTOPayment}
      handlebackClient={handlebackClient}
      maxSize={maxSize}
    />
  );
};
