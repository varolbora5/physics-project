import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export default function Pages() {
  return (
    <div>
      <Page />
    </div>
  );
}
export const loader = async ({ params }) => {
  if (params.directory == undefined) return "null";
  xc_auth_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1ZXN0QGZpemlrcHJvamVzaS5icnVoIiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjIsInJvbGVzIjoidXNlciIsImlhdCI6MTY0OTUwMzAwNn0.YnPc46WAk1TLKakf_9XyFbjf1EUnRiPzqgfwZNUSBdU";
  const res = await fetch(
    `http://localhost:8080/nc/fizik_projesi_64ny/api/v1/pages/distinct?where=(dir%2Ceq%2C${params.directory})`,
    { method: "GET", headers: { "xc-auth": xc_auth_token } }
  );
  return json(await res.json());
};

export const Page = () => {
  const data = useLoaderData();

  console.log(data);

  if (data[0] == undefined) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  return (
    <div className="text-center">
      <h1 className="text-4xl my-4">{data[0].title}</h1>
    </div>
  );
};

export const Content = () => {
  
};
