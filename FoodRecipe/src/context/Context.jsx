import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites")
    );

    if (savedFavorites) {
      setFavoritesList(savedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favoritesList)
    );
  }, [favoritesList]);


  async function handleSubmit(event) {
    event.preventDefault();

    if (!searchParam.trim()) {
      setError("Please search for a recipe.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setSearchParam("");
        navigate("/");
      }

    } catch (error) {
      console.log(error);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }


  function handleAddToFavorite(recipe) {
    const updatedFavorites = [...favoritesList];

    const recipeIndex = updatedFavorites.findIndex(
      (item) => item.id === recipe.id
    );


    if (recipeIndex === -1) {
      updatedFavorites.push(recipe);
    }

    else {
      updatedFavorites.splice(recipeIndex, 1);
    }


    setFavoritesList(updatedFavorites);
  }


  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,

        loading,
        setLoading,

        recipeList,
        setRecipeList,

        recipeDetailsData,
        setRecipeDetailsData,

        favoritesList,

        error,

        handleSubmit,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}