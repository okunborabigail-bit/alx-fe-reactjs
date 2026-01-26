import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeList from './RecipeList';
function AddRecipeForm() {
  const [recipe, setRecipe] = useState('');
  const { recipes, setRecipes } = useRecipeStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, recipe]);
    setRecipe('');
  };
  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type='text'
          name='recipe'
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          placeholder='Add a recipe'
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type='submit' style={{ padding: '5px' }}>Add</button>
      </form>
      <RecipeList />
    </div>
  );
}
export default AddRecipeForm;
