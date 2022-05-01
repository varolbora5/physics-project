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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1ZXN0dXNlckBib3JhdmFyb2wuY29tIiwiaWQiOiJ1c18xY2xsYmUzdnNxcmhieiIsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MTQyMTY5N30.afdqqE-bZabaN0wze9DvYuQ07DOQ6dnxBnPVoPoF5Ho";
  const res = await fetch(
    `http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/pages?where=(dir%2Ceq%2C${params.directory})`,
    { method: "GET", headers: { "xc-auth": xc_auth_token } }
  );
  return json(await res.json());
};

export const Page = () => {
  const data = useLoaderData().list;

  if (data[0] == undefined) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  return (
    <div className="items-center text-center border-minty-green border-4 rounded-tl-xl rounded-br-xl my-6 mx-16 h-auto">
      <Image base64_img={data[0].image} title={data[0].title} />
      <Title title={data[0].title} />
      <Content text={data[0].content} />
    </div>
  );
};

export const Image = ({ base64_img, title }) => {
  return (
    <div className="image-style mt-4">
      <img src={`data:image/png;base64, ${base64_img}`} alt={title} />
    </div>
  );
};

export const Content = ({ text }) => {
  return (
    <div className="text-center">
      <p className="text-xl m-4 break-words">{text}</p>
    </div>
  );
};

export const Title = ({ title }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl my-4">{title}</h1>
    </div>
  );
};
