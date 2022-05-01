import { Link } from "@remix-run/react";

export default function () {
  return (
    <div>
      <h2 className="text-2xl font-bold p-6 text-dark-shade text-center border-dark-shade border-5">
        Lütfen{" "}
        <Link className="text-main-brand" to="/">
          Anasayfa
        </Link>
        dan bir ürün seçiniz
      </h2>
    </div>
  );
}
