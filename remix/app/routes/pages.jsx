import { Link, Outlet } from "@remix-run/react";

export default function Page() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <header className="text-center border-minty-green border-b-2 text-xl font-bold p-6">
        <Link to="/">Fizik Laboratuvarı</Link>
      </header>
      <Outlet />
      <footer className="text-center border-t-2 text-xl border-minty-green font-bold p-6">
        Bora Varol <br /> 12/C 286 <br />
        Fizik Projesi
      </footer>
    </div>
  );
}
