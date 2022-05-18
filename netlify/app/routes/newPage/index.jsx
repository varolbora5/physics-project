import {
  redirect,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action = async ({ request }) => {
  const uploadHandler = unstable_createMemoryUploadHandler({
    maxFileSize: 5_000_000,
  });
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const res = await fetch(
    `http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/pages?where=(dir%2Ceq%2C${formData._fields.directory[0]})`,
    { method: "GET", headers: { "xc-auth": formData._fields.auth[0] } }
  )
  const aaa = await res.json()
  if ((await aaa[0]) != undefined) {
    throw new Response("Page already exists", {
      status: 400,
    });
  }
  const file = formData.get("image")
  const buffer = await file.arrayBuffer()
  const image = _arrayBufferToBase64(buffer)
  
  const pageData = {
    'created_at': new Date().toISOString(),
    'updated_at': new Date().toISOString(),
    'slug': formData._fields.directory[0].toString(),
    'title': formData._fields.title[0].toString(),
    'markdown': formData._fields.content[0].toString(),
    'image': image.toString()
    // DONE: Add image encoding and uploading
  }
  const page = fetch(
    "http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/pages",
    {
      method: "POST",
      headers: { "xc-auth": formData._fields.auth[0].toString(), 'Content-Type': 'application/json', 'accept': 'application/json' },
      body: JSON.stringify(pageData),
    }
    );

  return redirect(`/pages/${formData._fields.directory[0]}`);
};
export default function NewForm() {
  return (
    <div className="border-4 my-7 rounded-tl-xl rounded-br-xl border-minty-green justify-center list-style items-center">
      <Form method="post" encType="multipart/form-data">
        <p>Token: </p>
        <input className="bg-grey-shade p-3 m-3" type="text" name="auth" />
        <p>Dir: </p>
        <input className="bg-grey-shade p-3 m-3" type="text" name="directory" />
        <p>Title: </p>
        <input className="bg-grey-shade p-3 m-3" type="text" name="title" />
        <p>Text</p>
        <textarea
          className="bg-grey-shade p-3 m-3"
          type="text"
          name="content"
        />
        <p>Image</p>
        <input className="bg-grey-shade p-3 m-3" type="file" name="image" />
        <button className="bg-grey-shade p-3 m-3" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}

function _arrayBufferToBase64( buffer ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return global.btoa( binary );
//! btoa deprecated
}

