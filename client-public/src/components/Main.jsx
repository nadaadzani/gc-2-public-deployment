import Card from "./Card";

export default function Main({
  products,
  category,
  setFilter,
  currentPage,
  setCurrentPage,
  totalPage,
  setSort,
}) {
  return (
    <>
      <section className="flex h-fit mx-8 pt-20 justify-around">
        <aside className="flex flex-col bg-slate-200 gap-4 w-3/12 rounded-md">
          {/* Category list (fetchCategories) */}
          <ul className="font-medium text-xl indent-[20px]">
            <li className="py-2">Electronics</li>
            <li className="py-2">Anime</li>
            <li className="py-2">Medicine</li>
            <li className="py-2">Gaming</li>
            <li className="py-2">Clothing</li>
            <li className="py-2">Pants</li>
          </ul>
        </aside>
        <section className="flex w-8/12 bg-black rounded-md h-[280px]">
          <div className="flex flex-col w-1/2">
            <div className=" flex w-3/6 justify-center items-center mt-10 ml-8">
              <img
                className="w-[24px] object-contain"
                src="./src/assets/real-apple.png"
                alt=""
              />
              <span className="text-white ml-4">iPhone 14 Series</span>
            </div>
            <div className="mt-6 ml-20 w-2/6">
              <p className="text-white font-semibold text-2xl tracking-normal">
                Up to 10% off voucher
              </p>
            </div>
            <div className="mt-6 ml-20 w-2/6">
              <a href="">
                <p className="text-white font-normal underline decoration-solid">
                  Shop Now
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center w-1/2">
            <img
              className="w-2/3 object-cover"
              src="./src/assets/phone.png"
              alt=""
            />
          </div>
        </section>
      </section>

      <h1 className="text-2xl font-bold mx-14 mt-8">Browse your items:</h1>

      <div className="flex mx-14 mt-8 gap-4">
        <h3 className="font-semibold text-lg">Sort by: </h3>
        <button
          className="border-2 border-black p-1 rounded-md hover:bg-black hover:text-white"
          onClick={() => {
            setSort("ASC");
          }}
        >
          Newest
        </button>
        <button
          className="border-2 border-black p-1 rounded-md hover:bg-black hover:text-white"
          onClick={(e) => {
            setSort("DESC");
          }}
        >
          Oldest
        </button>

        <h3 className="font-semibold text-lg ml-24">Filter by: </h3>
        <form action="">
          <select name="i" id="" onChange={(e) => setFilter(e.target.value)}>
            {category.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <button
            className="ml-4 border-2 border-black p-1 rounded-md hover:bg-black hover:text-white"
            type="submit"
          >
            Filter
          </button>
        </form>
      </div>
      <div className="flex justify-between mx-14 mt-8 gap-4 text-xl font-bold">
        <div>
          <p className="text-xl font-bold">Page {currentPage}</p>
        </div>

        <div className="flex">
          <a
            className="mr-12 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage <= 1) {
                setCurrentPage(1);
              } else {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            Previous Page
          </a>
          <p className="mr-12">
            {currentPage} of {totalPage}
          </p>
          <a
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage >= totalPage) {
                setCurrentPage(totalPage);
              } else {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            Next Page
          </a>
        </div>
      </div>

      <main className="grid grid-cols-4 gap-8 mx-12 my-6 text-center h-[480px]">
        {/* fetchProducts */}
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </main>
    </>
  );
}
