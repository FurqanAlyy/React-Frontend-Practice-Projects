import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/Context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-5">
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-tight text-orange-600"
        >
          🍽️ FoodRecipe
        </NavLink>

        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full lg:w-auto"
        >
          <input
            type="text"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            placeholder="Search recipes..."
            className="w-full lg:w-[420px] rounded-l-xl border border-orange-200 bg-white px-5 py-3 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />

          <button
            type="submit"
            className="rounded-r-xl bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 active:scale-95"
          >
            Search
          </button>
        </form>

        <ul className="flex items-center gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}