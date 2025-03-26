import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import bg29 from "../assets/bg29.png";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const showPopup = (product) => {
    Swal.fire({
      title: product.title,
      html: `
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <img src="${product.image}" alt="${product.title}" style="width:100px; height:auto; margin-top:10px;" />
      `,
      icon: "info",
      confirmButtonText: "Close",
    });
  };

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">E-Commerce Store</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-700 text-white rounded">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="flex justify-center my-4">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded">
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                <p className="text-sm">${product.price}</p>
                <button 
                  onClick={() => showPopup(product)}
                  className="mt-2 p-2 bg-blue-500 text-white rounded">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-center">No products found in this category.</p>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
