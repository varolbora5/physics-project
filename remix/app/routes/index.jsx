import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <header className="text-center border-b-2 text-xl font-bold p-6">
        <Link to="/">Fizik Laboratuvarı</Link>
      </header>
      <List />
      <footer className="text-center border-t-2 text-xl font-bold p-6">
        Bora Varol <br /> 12/C 286 <br />
        Fizik Projesi
      </footer>
    </div>
  );
}

const List = () => {
  const data = useLoaderData()
  return (
    <div className="border-4 my-7 rounded-tl-xl rounded-br-xl border-dark-shade justify-center list-style">
      <ul>
        {data.map((item) => (
          <ListItem key={item.id} title={item.title} dir={item.dir} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = (props) => {
  return (
    <>
      <li className="m-1 list-inside list-disc my-2 break-words">
        <Link to={`/pages/${props.dir}`}>{props.title}</Link>
      </li>
    </>
  );
};

export const loader = async () => {
  xc_auth_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1ZXN0QGZpemlrcHJvamVzaS5icnVoIiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjIsInJvbGVzIjoidXNlciIsImlhdCI6MTY0OTUwMzAwNn0.YnPc46WAk1TLKakf_9XyFbjf1EUnRiPzqgfwZNUSBdU";
  const res = await fetch(
    "http://localhost:8080/nc/fizik_projesi_64ny/api/v1/directories",
    { method: "GET", headers: { "xc-auth": xc_auth_token } }
  );
  return json(await res.json());
};
