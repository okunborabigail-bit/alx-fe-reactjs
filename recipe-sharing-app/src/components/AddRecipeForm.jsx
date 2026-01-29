import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import RecipeList from "./RecipeList";
function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addRecipe({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Recipe description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
      <RecipeList />
    </div>
  );
}
export default AddRecipeForm;



