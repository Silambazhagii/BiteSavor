import React, { useEffect, useState } from "react";
import bg29 from "../assets/bg29.png";
import { FaSearch, FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import loadingImage from "../assets/loading.png";
import Swal from "sweetalert2";



const Menu = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          className="animate-spin h-16"
          src={loadingImage}
          alt="Loading..."
        />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-red-500 text-lg font-semibold">
          Error: {error}
        </p>
      </div>
    );

  return (
    <div
      className={
        darkMode ? " bg-gray-900 text-white" : "bg-gray-100 text-black"
      }
    >
      {/* Dark Mode Toggle */}
      <div className="absolute top-6 mt-0.5 right-4 flex items-center justify-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 rounded-full h-7 w-7 flex items-center justify-center shadow-md bg-gray-700 text-white hover:scale-105 transition"
        >
          {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>
      </div>



      {/* Search Bar */}
      <div className="flex items-center mt-10 justify-center my-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products..."
            className="p-3 pl-10 rounded-lg shadow-md w-72 border border-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Product Section */}
      <h2 className="text-3xl font-bold text-center mt-6 mb-6">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className={
                darkMode
                  ? " bg-gray-950 border-amber-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out p-4"
                  : "bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out p-4"
              }
              // className=""
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-lg font-bold">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {product.description}
                </p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg shadow-md flex items-center gap-2 hover:bg-blue-700"
                  onClick={() =>
                    Swal.fire({
                      title: "Added to Cart!",
                      icon: "success",
                      draggable: true
                    })
                  }
                >
                  <FaShoppingCart /> Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold text-gray-500 col-span-4">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Menu;
