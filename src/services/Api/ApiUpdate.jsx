import { toast } from "react-toastify";
import { api } from "./ApiConnection";

const RecipeUpdate = async (
  id,
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
    const reservation = await api.put(`Recipe`, {
      id: id,
      title: title,
      photo: photo,
      preparationMethod: preparationMethod,
      preparationTime: preparationTime,
      cost: cost,
      difficulty: difficulty,
      categoryId: categoryId,
      ingredients: ingredients,
    });
    if (reservation.status === 200) {
      toast.success("Receita atualizada com sucesso!");
      return true;
    }
    return false;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export default { RecipeUpdate };
