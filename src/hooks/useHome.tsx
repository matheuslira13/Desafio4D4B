import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserInfo } from "../components/TextInput";
import { mockuser } from "../utils/mockUser";
import { TextInputWithLabelProps, RowFormProps } from "../components/RowForm";
import { updateUser } from "../ducks/userStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
  useEffect(() => {
    getAllUser();
  }, []);
  const [allUser, setAllUser] = useState<UserInfo[]>();
  const getAllUser = async () => {
    try {
      await axios.get(`http://localhost:3000/`);
      setAllUser(mockuser);
    } catch (error) {
      console.log("error");
    }
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product");
  };

  const goToDoc = () => {
    navigate("/doc");
  };
  const [user, setUser] = useState<UserInfo>({
    name: "Selecione um usuario",
    cpf: "",
    ierg: "",
    printAgency: "",
    telephone: "",
    cellphone: "",
    birth: "",
    country: "",
    state: "",
    cityBorn: "",
    maritalStatus: "",
    gender: "",
    balance: 0,
  });
  const handleUserChange = (event: any) => {
    const selectedUser = event.target.value;
    if (selectedUser === "Antônio José dos Santos") {
      setUser({
        ...user,
        name: "Antônio José dos Santos",
        cpf: "407.495.188-98",
        ierg: "34.420.078-0",
        printAgency: "SSP",
        telephone: "(11) 0000-000",
        cellphone: "(11) 0000-000",
        birth: "1995-04-08",
        country: "Brasileira",
        state: "São Paulo",
        cityBorn: "São Paulo",
        maritalStatus: "Casado (a)",
        gender: "Masculino",
        balance: 5000,
      });
      dispatch(
        updateUser({
          user: {
            name: "Antônio José dos Santos",
            cpf: "407.495.188-98",
            ierg: "34.420.078-0",
            printAgency: "SSP",
            telephone: "(11) 0000-000",
            cellphone: "(11) 0000-000",
            birth: "1995-04-08",
            country: "Brasileira",
            state: "São Paulo",
            cityBorn: "São Paulo",
            maritalStatus: "Casado (a)",
            gender: "Masculino",
            balance: 5000,
          },
        })
      );
    } else if (selectedUser === "Matheus Lira Barbosa") {
      setUser({
        ...user,
        name: "Matheus Lira Barbosa",
        cpf: "555.555.555-55",
        ierg: "66.666.666-0",
        printAgency: "SSP",
        telephone: "(13) 97420-8098",
        cellphone: "(13) 97420-8098",
        birth: "1994-05-31",
        country: "Brasileira",
        state: "São Paulo",
        cityBorn: "São Vicente",
        maritalStatus: "Solteiro (a)",
        gender: "Masculino",
        balance: 50,
      });
      dispatch(
        updateUser({
          user: {
            name: "Matheus Lira Barbosa",
            cpf: "555.555.555-55",
            ierg: "66.666.666-0",
            printAgency: "SSP",
            telephone: "(13) 97420-8098",
            cellphone: "(13) 97420-8098",
            birth: "1994-05-31",
            country: "Brasileira",
            state: "São Paulo",
            cityBorn: "São Vicente",
            maritalStatus: "Solteiro (a)",
            gender: "Masculino",
            balance: 50,
          },
        })
      );
    } else if (selectedUser === "MK Solutions") {
      setUser({
        ...user,
        name: "MK Solutions",
        cpf: "000.000.000-00",
        ierg: "34.420.078-0",
        printAgency: "SSP",
        telephone: "(11) 0000-000",
        cellphone: "(11) 0000-000",
        birth: "2008-04-07",
        country: "Brasileira",
        state: "São Paulo",
        cityBorn: "São Paulo",
        maritalStatus: "Casado (a)",
        gender: "Masculino",
        balance: 1000000,
      });
      dispatch(
        updateUser({
          user: {
            name: "MK Solutions",
            cpf: "000.000.000-00",
            ierg: "34.420.078-0",
            printAgency: "SSP",
            telephone: "(11) 0000-000",
            cellphone: "(11) 0000-000",
            birth: "2008-04-07",
            country: "Brasileira",
            state: "São Paulo",
            cityBorn: "São Paulo",
            maritalStatus: "Casado (a)",
            gender: "Masculino",
            balance: 1000000,
          },
        })
      );
    } else {
      setUser({
        ...user,
        name: "Selecione um usuario",
        cpf: "",
        ierg: "",
        printAgency: "",
        telephone: "",
        cellphone: "",
        birth: "",
        country: "",
        state: "",
        cityBorn: "",
        maritalStatus: "",
        gender: "",
        balance: 0,
      });
      dispatch(updateUser({ user }));
    }
  };
  const rowName: TextInputWithLabelProps[] = [
    {
      onChange: handleUserChange,
      type: "select",
      value: user?.name,
      option: allUser,
    },
  ];

  const rowDocs: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "text",
      value: user?.cpf,
      label: "cpf",
    },
    {
      onChange: () => {},
      type: "text",
      value: user?.ierg,
      width: "100%",
      label: "ierg",
    },
    {
      onChange: () => {},
      type: "text",
      value: user?.printAgency,
      width: "100%",
      label: "printAgency",
    },
  ];

  const rowContact: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "text",
      value: user?.telephone,
      label: "telephone",
    },
    {
      onChange: () => {},
      type: "text",
      value: user?.cellphone,
      label: "cellPhone",
    },
  ];
  const rowBirth: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "date",
      value: user?.birth,
      width: "100%",
      label: "birth",
    },
  ];
  const rowCountry: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "text",
      value: user?.country,
      label: "country",
    },
  ];

  const rowState: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "select",
      value: user?.state,
      label: "state",
      defaultValue: user?.state,
    },
  ];

  const rowCity: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "select",
      value: user?.cityBorn,
      label: "cityBorn",
      defaultValue: user?.cityBorn,
    },
  ];

  const rowMarital: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "select",
      value: user?.maritalStatus,
      label: "maritalStatus",
      defaultValue: user?.maritalStatus,
    },
  ];

  const rowGender: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "select",
      value: user?.gender,
      label: "gender",
      defaultValue: user?.gender,
    },
  ];
  const formData: RowFormProps[] = [
    {
      leftside: rowName,
      fullWeight: "clientName",
      firsLineRightSide: true,
      leftSideBtn: true,
    },
    {
      leftside: rowDocs,
    },
    {
      leftside: rowContact,
      space: true,
    },
    {
      leftside: rowBirth,
    },
    { leftside: rowCountry },
    { leftside: rowState },
    { leftside: rowCity, space: true },
    { leftside: rowMarital },
    { leftside: rowGender, space: true },
  ];
  return {
    formData,
    goToProduct,
    goToDoc,
  };
};
