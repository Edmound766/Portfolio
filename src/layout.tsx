import Navbar from "@/components/navigation/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
