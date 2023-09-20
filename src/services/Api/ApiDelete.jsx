import { toast } from "react-toastify";
import { api } from "./ApiConnection";

const RecipeDelete = async (id) => {
  try {
    const recipe = await api.delete(`Recipe/${id}`);
    if (recipe.status === 200) return recipe;
    return false;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export default { RecipeDelete };
