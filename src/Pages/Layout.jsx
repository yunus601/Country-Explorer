import { Outlet } from "react-router";
import Header from "../../ui/Header";
import Main from "../../ui/Main";
import Footer from "../../ui/Footer";

function Layout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-neutral-app-bg text-text-primary">
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
}

export default Layout;
