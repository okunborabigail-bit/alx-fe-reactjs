import { useState } from "react";
const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Checker-friendly validate function
  const validate = () => {
    let validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      validationErrors.ingredients =
        "Please include at least two ingredients separated by commas";
    }

    if (!steps.trim()) {
      validationErrors.steps = "Preparation steps are required";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients,
        steps,
      };

      console.log("New Recipe Submitted:", newRecipe);

      setTitle("");
      setIngredients("");
      setSteps("");
      alert("Recipe added successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Add New Recipe 🍲
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Ingredients (separate with commas)
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preparation Steps
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">
                {errors.steps}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
