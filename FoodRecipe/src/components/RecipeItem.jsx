import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="h-56 overflow-hidden">
        <img
          src={item?.image_url}
          alt={item?.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4 p-6">
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600">
          {item?.publisher}
        </span>

        <h2 className="line-clamp-2 text-xl font-bold text-gray-800">
          {item?.title}
        </h2>

        <Link
          to={`/recipe-item/${item?.id}`}
          className="inline-flex items-center rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-95"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  );
}