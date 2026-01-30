import { create } from "zustand";
export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  // Recipe actions
  addRecipe: (recipe) =>
    set((state) => {
      const newRecipes = [...state.recipes, recipe];
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const newRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const newRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  // Search actions
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
  // Favorites actions
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  // Recommendations (simple mock)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));









