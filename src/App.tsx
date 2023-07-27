import React from "react";
import { Route, BrowserRouter, Routes, useParams } from "react-router-dom";
import { Provider } from "react-redux";
import { Header, Navbar } from "./components";
import { store } from "./ducks/store";
import { HomeScreen } from "./screens/Home_Screen";
import { UploadScreen } from "./screens/Upload.Screen";
import Layout from "./components/Layout";

import "./i18n";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/doc/:id" element={<UploadScreen />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
