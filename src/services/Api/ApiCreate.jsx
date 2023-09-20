import { api } from "./ApiConnection";
import { toast } from "react-toastify";

const RecipeCreate = async (
  title,
  photo,
  preparationMethod,
  preparationTime,
  cost,
  difficulty,
  categoryId,
  ingredients
) => {
  try {
    const recipe = await api.post(`Recipe/register`, {
      title: title,
      photo: photo,
      preparationMethod: preparationMethod,
      preparationTime: preparationTime,
      cost: cost,
      difficulty: difficulty,
      categoryId: categoryId,
      ingredients: ingredients,
    });
    if (recipe.status === 201) return true;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export default {
  RecipeCreate,
};
