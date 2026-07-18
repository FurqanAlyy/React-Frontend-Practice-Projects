import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/Context";
import Loader from "../components/Loader";


export default function Details() {
  const { id } = useParams();

  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);


  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );

        const data = await response.json();

        if (data?.data) {
          setRecipeDetailsData(data.data);
        }

      } catch (error) {
        console.log(error);
      }
    }


    getRecipeDetails();

  }, [id, setRecipeDetailsData]);



  if (!recipeDetailsData) {
    return <Loader />;
  }


  const recipe = recipeDetailsData.recipe;


  const isFavorite =
    favoritesList &&
    favoritesList.some(
      (item) => item.id === recipe.id
    );



  return (
    <main className="min-h-screen bg-orange-50 px-6 py-10">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="h-[500px] w-full object-cover transition-transform duration-500 hover:scale-105"
          />

        </div>

        <div className="flex flex-col justify-center space-y-6 rounded-3xl bg-white p-8 shadow-xl">


          <span className="w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            {recipe.publisher}
          </span>

          <h1 className="text-3xl font-extrabold text-gray-800 md:text-5xl">
            {recipe.title}
          </h1>

          <button
            onClick={() => handleAddToFavorite(recipe)}
            className={`w-fit rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 active:scale-95 ${
              isFavorite
                ? "bg-red-500 hover:bg-red-600"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {isFavorite
              ? "❤️ Remove Favorite"
              : "🤍 Add Favorite"}
          </button>

          <div>

            <h2 className="mb-5 text-2xl font-bold text-gray-800">
              Ingredients
            </h2>

            <ul className="space-y-4">

              {recipe.ingredients?.map(
                (ingredient, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-orange-50 p-4"
                  >

                    <span className="text-xl">
                      ✅
                    </span>


                    <p className="text-lg text-gray-700">

                      {ingredient.quantity &&
                        `${ingredient.quantity} `
                      }

                      {ingredient.unit &&
                        `${ingredient.unit} `
                      }

                      {ingredient.description}

                    </p>

                  </li>

                )
              )}

            </ul>

          </div>


        </div>


      </div>

    </main>
  );
}