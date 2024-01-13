import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ProductDetail from "./components/ProductDetail";

function Home() {
  const [page, setPage] = useState("home");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [sort, setSort] = useState("ASC");

  const url = "https://phase2-aio.vercel.app";

  async function fetchProducts() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products?q=${search}&i=${filter}&limit=${limit}&page=${currentPage}&sort=${sort}`
      );
      setProducts(data.data.query);
      setTotalPage(data.data.pagination.totalPage);
      // for (let i = currentPage; i <= totalPage; i++) {

      // }
      console.log(data.data.pagination);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/categories`
      );
      setCategory(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  function searchOnChange(event) {
    let search = event.target.value;
    // console.log(search);
    setSearch(search);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [search, filter, currentPage, sort]);

  return (
    <>
      <Navbar searchOnChange={searchOnChange} />
      {page === "home" && (
        <Main
          products={products}
          category={category}
          setFilter={setFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
          setSort={setSort}
        />
      )}
    </>
  );
}

export default Home;
