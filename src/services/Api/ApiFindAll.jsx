import { api } from "./ApiConnection";
import { toast } from "react-toastify";

const RecipesFindAll = async () => {
  try {
    const recipes = await api.get("/Recipe");
    if (recipes.status === 200) return recipes;
    return false;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error(error.response.headers.error);
    }
  }
};

const CategoriesFindAll = async () => {
  try {
    const categories = await api.get("/Category");
    if (categories.status === 200) return categories;
    return false;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error(error.response.headers.error);
    }
  }
};

export default {
  RecipesFindAll,
  CategoriesFindAll,
};
