import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <header className="text-center border-minty-green border-b-2 text-xl font-bold p-6">
        <Link to="/">Fizik Laboratuvarı</Link>
      </header>
      <List />
      <footer className="text-center border-minty-green border-t-2 text-xl font-bold p-6">
        Bora Varol <br /> 12/C 286 <br />
        Fizik Projesi
      </footer>
    </div>
  );
}

const List = () => {
  const data = useLoaderData();
  return (
    <div className="border-4 my-7 rounded-tl-xl rounded-br-xl border-minty-green justify-center list-style">
      <ul>
        {data.list.map((item) => (
          <ListItem key={item.id} title={item.title} slug={item.slug} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = (props) => {
  return (
    <>
      <li className="m-1 list-inside list-disc my-2 break-words">
        <Link to={`/pages/${props.slug}`}>{props.title}</Link>
      </li>
    </>
  );
};

export const loader = async () => {
  xc_auth_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1ZXN0dXNlckBib3JhdmFyb2wuY29tIiwiaWQiOiJ1c18xY2xsYmUzdnNxcmhieiIsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MTQyMTY5N30.afdqqE-bZabaN0wze9DvYuQ07DOQ6dnxBnPVoPoF5Ho";
  const a = await fetch(
    "http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/pages/count",
    {
      method: "GET",
      headers: { "xc-auth": xc_auth_token },
    }
  );
  const count = await a.json().count;
  const res = await fetch(
    `http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/pages?limit=${parseInt(count)}`,
    { method: "GET", headers: { "xc-auth": xc_auth_token } }
  );
  return json(await res.json());
};
