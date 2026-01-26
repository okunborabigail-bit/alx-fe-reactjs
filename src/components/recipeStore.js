import { create } from 'zustand';
export const useRecipeStore = create((set) => ({
  recipes: [],
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));
