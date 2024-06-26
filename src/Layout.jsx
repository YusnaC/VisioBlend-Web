import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderNew from "./components/HeaderNew.jsx";
import Header from "./components/Header.jsx";
const Layout = () => {
  return (
    <>
      <Header />
      {/* <HeaderNew /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
