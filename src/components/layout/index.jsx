import { Outlet } from "react-router-dom";

import Header from "@components/layout/Header";
import Search from "@components/search/Search";
import Footer from "@components/layout/Footer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <Search />
      <main className="layout-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
