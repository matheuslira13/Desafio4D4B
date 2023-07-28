import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Header, Navbar } from "./components";
import { store } from "./ducks/store";
import { HomeScreen } from "./screens/Home_Screen";
import { UploadScreen } from "./screens/Upload.Screen";
import ProductScreen from "./template/Product";
import PaymentScreen from "./template/Payment";
import AgreementScreen from "./template/Agreement";
import DefaultScreen from "./template/Defalut";

import Layout from "./components/Layout";

import "./i18n";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" index element={<HomeScreen />} />
            <Route path="/client" index element={<HomeScreen />} />
            <Route path="/doc" element={<UploadScreen />} />
            <Route path="/product" element={<ProductScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/agreement" element={<AgreementScreen />} />
            <Route path="*" element={<DefaultScreen />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
