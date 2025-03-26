import React, { useEffect, useRef, useState } from "react";
import bg29 from "../assets/bg29.png";
import {
  FaSearch,
  FaShoppingCart,
  FaMoon,
  FaSun,
  FaStar,
} from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import loadingImage from "../assets/loading.png";
import Swal from "sweetalert2";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("dessert");
  const categoryRef = useRef();

  

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

  const categories = [...new Set(products.map((product) => product.category))];

  const selectedProducts = filteredProducts.filter(
    (product) => product.category === selectedCategory
  );

  const nextProduct = () => {
    categoryRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const prevProduct = () => {
    categoryRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

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
      className={darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}
    >
      <div className="absolute top-6 right-4 flex items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 transition: background-color 0.3s ease-in-out, transform 0.2s rounded-full h-10 w-10 flex items-center justify-center shadow-md bg-gray-700 text-white hover:scale-110 transition-all"
        >
          
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>

      <div
        className="w-full h-auto py-16 flex flex-col items-center text-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg29})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm"></div>
        <h2 className="relative text-6xl font-extrabold text-white drop-shadow-lg">
          Swift Delivery,
        </h2>
        <h2 className="relative text-6xl font-extrabold text-white mt-3">
          Right to <span className="text-yellow-400">Your Door</span>
        </h2>
        <p className="relative text-lg text-white max-w-xl mt-4 px-6">
          Need something delicious, fresh, and fast? BiteSavor is here to serve
          up quality meals made with love.
        </p>
        <button className="relative bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold mt-5 shadow-lg hover:scale-105 transition-all">
          Order Now
        </button>
      </div>

      {/* Featured Products */}
      <div className="text-center justify-center items-center my-10">
        <h2 className="text-4xl font-bold justify-center items-center text-gray-800">
          Today's Special
        </h2>
        <div className="flex gap-6 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4 py-6 justify-center">
          {products.slice(0, 5).map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all p-5 w-64 min-w-[250px] text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-2 text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 text-lg font-bold">
                ${product.price}
              </p>
              <button
                className="bg-blue-500 text-white px-5 py-2 mt-3 rounded-lg shadow-md flex justify-center items-center gap-2 hover:bg-blue-700"
                onClick={() =>
                  Swal.fire({
                    title: "Added to Cart!",
                    icon: "success",
                    draggable: true,
                  })
                }
              >
                <FaShoppingCart /> Add
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-6 gap-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 rounded-lg shadow-md w-72 border border-gray-300 bg-white text-gray-700"
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <div className="mb-10">
          <div className="flex w-full items-center mb-4 px-4">
            <h2 className="text-3xl text-slate-800 font-semibold">
              {selectedCategory}
            </h2>
            <div className="ml-auto flex gap-4">
              <button
                onClick={prevProduct}
                className="bg-slate-200 hover:bg-slate-400 text-lg p-2 rounded-full"
              >
                <GrPrevious />
              </button>
              <button
                onClick={nextProduct}
                className="bg-slate-200 hover:bg-slate-400 text-lg p-2 rounded-full"
              >
                <GrNext />
              </button>
            </div>
          </div>

          <div
            className="flex gap-5 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4"
            ref={categoryRef}
          >
            {selectedProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all p-5 w-64 min-w-[250px] text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-lg font-bold">
                  ${product.price}
                </p>
                <button
                  className="bg-blue-500 text-white px-5 py-2 mt-3 rounded-lg shadow-md flex items-center gap-2 hover:bg-blue-700"
                  onClick={() =>
                    Swal.fire({
                      title: "Added to Cart!",
                      icon: "success",
                      draggable: true,
                    })
                  }
                >
                  <FaShoppingCart /> Add
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* </div> */}

 {/* Testimonials */}
 <div className="bg-gray-200 py-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          What Our Customers Say
        </h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4 py-6 justify-center">
          {[
            {
              name: "Emma L.",
              comment: "The food was so fresh, it felt like a home-cooked meal! 10/10 service!",
            },
            {
              name: "David R.",
              comment: "Lightning-fast delivery! I barely finished my call before my food arrived!",
            },
            {
              name: "Sophia M.",
              comment: "Delicious meals, great packaging, and excellent customer service. Highly recommend!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md w-80 min-w-[280px]"
            >
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-gray-800">{testimonial.name}</span>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; 2025 BiteSavor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
