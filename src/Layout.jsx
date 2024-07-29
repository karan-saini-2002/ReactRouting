import { Outlet } from "react-router-dom";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

export default Layout