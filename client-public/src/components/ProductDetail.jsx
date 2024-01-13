import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const url = "https://phase2-aio.vercel.app";

  console.log(product);

  async function fetchProduct() {
    try {
      setLoading("load");
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products/` + id
      );
      setProduct(data.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="w-auto mx-12 mt-28 mb-14">
        <h4 className="tracking-widest">
          <span className="text-gray-600">Account / </span>
          {product.name}
        </h4>
      </div>

      <div className="flex w-auto h-[28em] mx-12 gap-12">
        <div className="flex w-1/2 bg-gray-200 justify-center items-center rounded-lg">
          <img
            className="w-[32em] h-[24em] rounded-md"
            src={product.imgUrl}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-8">Stock: {product.stock}</p>
          <p className="text-xl font-semibold mb-6">Rp. {product.price}</p>
          <p className="font-medium mb-6">{product.description}</p>

          <div className="border-t-2 border-gray-400 mb-6"></div>
          <div className="flex text-2xl mb-4">
            <p>Colours:</p>
            <form className="flex items-center pt-[2px] ml-4 gap-4" action="">
              <input className="w-6 h-8" type="radio" id="black" />
              <input className="w-6 h-8 bg-red-700" type="radio" id="red-700" />
            </form>
          </div>
          <div className="flex text-2xl">
            <p>Size:</p>
            <div className="flex items-center ml-4 gap-4 mb-4">
              <button className="border-black border-2 w-9 rounded-lg hover:bg-black hover:text-white">
                S
              </button>
              <button className="border-black border-2 w-9 rounded-lg hover:bg-black hover:text-white">
                M
              </button>
              <button className="border-black border-2 w-9 rounded-lg hover:bg-black hover:text-white">
                L
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full border-black border bg-red-600 text-white h-12 rounded-xl">
            <button className="text-semibold">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
