import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeList from './RecipeList';
function AddRecipeForm() {
  const [recipe, setRecipe] = useState('');
  const { recipes, setRecipes } = useRecipeStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.trim()) return;
    setRecipes([...recipes, recipe]);
    setRecipe('');
  };
  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          placeholder="New recipe"
        />
        <button type="submit">Add</button>
      </form>
      <RecipeList />
    </div>
  );
}
export default AddRecipeForm;

