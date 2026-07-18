import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import RecipeItem from "../components/RecipeItem";
import EmptyState from "../components/EmptyState";


export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);


  return (
    <main className="min-h-screen bg-orange-50 px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            Your Favorite Recipes ❤️
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Save recipes you love and access them anytime.
          </p>
        </div>


        {favoritesList && favoritesList.length > 0 ? (

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {favoritesList.map((item) => (
              <RecipeItem
                key={item.id}
                item={item}
              />
            ))}

          </div>

        ) : (

          <EmptyState
            title="No Favorites Yet"
            subtitle="Start exploring recipes and save your favorites here."
          />

        )}

      </div>

    </main>
  );
}