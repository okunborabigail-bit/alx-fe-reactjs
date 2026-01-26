import React from 'react';
import { useRecipeStore } from './recipeStore';
function RecipeList() {
  const { recipes } = useRecipeStore();
  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index} style={{ margin: '5px 0' }}>{recipe}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default RecipeList;
