import HomeTemplate from "../template/Home/Home";
import { useHome } from "../hooks/useHome";

export const HomeScreen = () => {
  const { formData } = useHome();

  return <HomeTemplate formData={formData} />;
};
