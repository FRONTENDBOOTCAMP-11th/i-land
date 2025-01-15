import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />

      <main className="layout-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
