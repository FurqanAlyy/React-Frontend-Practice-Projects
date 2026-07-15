import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length > 0) {
        setProducts((prev) => [...prev, ...result.products]);
      }

      setLoading(false);
    } catch (err) {
      console.log("Error:", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) {
      setDisableBtn(true);
    }
  }, [products]);

  if (loading && products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Load More Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-40 h-40 object-cover mb-4"
            />
            <p className="text-center font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-8">
        {loading && (
          <p className="mb-4 text-blue-600 font-semibold">Loading...</p>
        )}

        <button
          disabled={disableBtn}
          onClick={() => setCount((prev) => prev + 1)}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            disableBtn
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-emerald-600 hover:bg-emerald-700 text-white"
          }`}
        >
          Load More Products
        </button>

        {disableBtn && (
          <p className="mt-4 text-red-600 font-medium">
            You have reached 100 products.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadMore;