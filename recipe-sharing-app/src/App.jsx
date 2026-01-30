import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar";
import { useRecipeStore } from "./components/recipeStore";
const App = () => {
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  // Re-filter recipes whenever search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);
  // Generate recommendations on load
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

