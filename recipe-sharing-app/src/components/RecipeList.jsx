import { useRecipeStore } from './recipeStore';
function RecipeList() {
  const { recipes } = useRecipeStore();
  return (
    <div style={{ padding: '10px' }}>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
}
export default RecipeList;

