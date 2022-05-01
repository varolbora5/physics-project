import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  Link
} from "@remix-run/react";

import styles from "./App.css";

export function links() {
  return [{rel: "stylesheet", href: styles}];
}

export const meta = () => ({
  charset: "utf-8",
  title: "Fizik Laboratuvarı",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload port={2526}/>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <header className="text-center border-b-2 text-xl font-bold p-6 mb-7">
        Fizik Laboratuvarı
      </header>
        <h2 className="text-2xl font-bold p-6 mb-7 text-dark-shade text-center border-dark-shade border-5">
          Lütfen{" "}
          <Link className="text-main-brand" to="/">
            Anasayfa
          </Link>
          dan bir ürün seçiniz
        </h2>
      <footer className="text-center border-t-2 text-xl font-bold p-6 mb-7">
        Bora Varol <br /> 12/C 286 <br />
        Fizik Projesi
      </footer>
    </div>
        <Scripts />
      </body>
    </html>
  );
}