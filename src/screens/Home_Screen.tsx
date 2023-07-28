import HomeTemplate from "../template/Home/Home";
import { useHome } from "../hooks/useHome";

export const HomeScreen = () => {
  const { formData, goToProduct, goToDoc } = useHome();

  return (
    <HomeTemplate
      formData={formData}
      goToProduct={goToProduct}
      goToDoc={goToDoc}
    />
  );
};
