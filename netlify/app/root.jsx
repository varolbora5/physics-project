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
      <body className="text-megaman border-minty-green border-4 rounded-none bg-black-shade">
      <div className="body-style">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload port={2526}/>
      </div>
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
      <body className="border-minty-green text-megaman border-4 rounded-none bg-black-shade">
      <div className="body-style" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <header className="text-center border-minty-green border-b-2 text-xl font-bold p-6 mb-7">
        <Link to="/">
        Fizik Laboratuvarı
        </Link>
      </header>
        <h2 className="text-2xl font-bold p-6 mb-7 text-megaman text-center border-minty-green border-5">
          Lütfen{" "}
          <Link className="text-minty-green" to="/">
            Anasayfa
          </Link>
          dan bir ürün seçiniz
        </h2>
      <footer className="items-center text-center border-minty-green border-t-2 text-xl font-bold p-6 mb-7">
        Bora Varol <br /> 12/C 286 <br />
        Fizik Projesi
      </footer>
    </div>
        <Scripts />
      </body>
    </html>
  );
}