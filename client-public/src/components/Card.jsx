import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <>
      {/* Product */}
      <div className="flex flex-col items-center h-[500px] bg-slate-400 rounded-lg ">
        <img
          className="w-72 h-48 rounded-lg my-3"
          src={product.imgUrl}
          alt=""
        />
        <p className="font-semibold text-xl my-2">{product.name}</p>
        <div className="flex justify-between text-sm text-gray-300 gap-24">
          <p>Rp. {product.price}</p>
          <p>{product.stock} stock left</p>
        </div>
        <p className="mx-6 text-left mt-2 text-sm">{product.description}</p>

        <Link
          to={`/products/${product.id}`}
          className="mt-auto mb-4 w-full rounded-lg mx-6 bg-black text-white"
        >
          Read More
        </Link>
      </div>
    </>
  );
}
