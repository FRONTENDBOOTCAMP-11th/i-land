import { Outlet } from "react-router-dom";

import Header from "@components/layout/Header";
import Search from "@components/search/Search";
import Footer from "@components/layout/Footer";
import MoveScroll from "@components/common/MoveScroll";
export default function Layout() {
  return (
    <div className="layout-container">
      <div name="header">
        <Header />
      </div>
      <Search />
      <main className="layout-main">
        <Outlet />
      </main>
      <div name="footer">
        <Footer />
      </div>
      <div className="fixed top-[50%] right-[10px]">
        <MoveScroll />
      </div>
    </div>
  );
}
