import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
function EditRecipeForm({ recipe }) {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({
      id: recipe.id,
      title,
      description,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}
export default EditRecipeForm;

