import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import RecipeItem from "../components/RecipeItem";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

export default function Home() {
  const { recipeList, loading, error } = useContext(GlobalContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            Discover Delicious Recipes 🍴
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Search thousands of recipes and find your next favorite meal.
          </p>
        </div>

        {error && (
          <div className="mb-8 rounded-xl bg-red-100 p-4 text-center font-medium text-red-600">
            {error}
          </div>
        )}


        {recipeList && recipeList.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipeList.map((item) => (
              <RecipeItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Recipes Found"
            subtitle="Search for your favorite dishes and start cooking something amazing."
          />
        )}

      </div>
    </main>
  );
}