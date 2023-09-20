import { toast } from "react-toastify";
import { api } from "./apiConnection";

const RecipeFindById = async (id) => {
  try {
    const recipe = await api.get(`Recipe/${id}`);
    if (recipe.status === 200) return recipe;
    return false;
  } catch (error) {
    toast.error(error.response.headers.error);
  }
};

export default { RecipeFindById };
