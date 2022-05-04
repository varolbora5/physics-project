import { Link } from "@remix-run/react";

export default function () {
  return (
    <div>
      <h2 className="text-2xl font-bold p-6 text-minty-green text-center border-minty-green border-5">
        Lütfen{" "}
        <Link className="text-main-brand" to="/">
          Anasayfa
        </Link>
        dan bir ürün seçiniz
      </h2>
    </div>
  );
}
