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
    uploadHandler // <-- we'll look at this deeper next
  );
  var image;
  const file = formData.get("image");
  file.arrayBuffer().then((buffer) => {
    const base64 = buffer.toString("base64");
    image = base64;
  })
  const dir = fetch("http://localhost:8080/nc/fizik_projesi_64ny/api/v1/directories", { method: "POST", headers: { "xc-auth": formData.get("auth") }, body: {
    title: formData.get("title"),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    dir: formData.get("dir"),
  } });
  const page = fetch("http://localhost:8080/nc/fizik_projesi_64ny/api/v1/pages", { method: "POST", headers: { "xc-auth": formData.get("auth") }, body: {
    title: formData.get("title"),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    dir: formData.get("dir"),
    content: formData.get("content"),
    image: image,
  // DONE: Add image encoding and uploading
  }})

  redirect(`/pages/${formData.get("dir")}`);
};
export default function NewForm() {
  return (
    <div className="border-4 my-7 rounded-tl-xl rounded-br-xl border-dark-shade justify-center list-style items-center">
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
}
