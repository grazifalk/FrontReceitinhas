import { useEffect, useState } from "react";
import { Form, InputText, MessageBox, SelectInput } from "./style";
import { ButtonDefault } from "../button-default";
import ApiUpdate from "../../services/Api/ApiUpdate"; // Importe a função de atualização da API
import { toast } from "react-toastify";
import ApiFindAll from "../../services/Api/ApiFindAll";
import { useNavigate } from "react-router-dom";

export const FormUpdate = ({
  recipe,
  HandledarkMode,
  checar,
  decreaseFontSize,
  increaseFontSize,
}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    recipe.selectedCategory
  );

  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const navigate = useNavigate();

  const findAll = async () => {
    const res = await ApiFindAll.CategoriesFindAll();
    let list = res.data.data;
    setCategories(list);
  };

  useEffect(() => {
    findAll();
  }, []);

  const [formData, setFormData] = useState({
    title: recipe.title,
    photo: recipe.photo,
    preparationMethod: recipe.preparationMethod,
    preparationTime: recipe.preparationTime,
    cost: recipe.cost,
    difficulty: recipe.difficulty,
    categoryId: recipe.categoryId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(
      formData.id,
      formData.title,
      formData.photo,
      formData.preparationMethod,
      formData.preparationTime,
      formData.cost,
      formData.difficulty,
      formData.categoryId,
      ingredients
    );
  };

  const updateRecipe = async (
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
    const response = await ApiUpdate.RecipeUpdate(
      recipe.id,
      title,
      photo,
      preparationMethod,
      preparationTime,
      cost,
      difficulty,
      categoryId,
      ingredients
    );

    if (response === true) {
      setFormData({
        title: "",
        photo: "",
        preparationMethod: "",
        preparationTime: "",
        cost: "",
        difficulty: "",
        categoryId: "",
      });
      setIngredients([]);
      setSelectedCategory("");
      navigate(`/Recipe/${recipe.id}`);
    } else {
      toast.error("Erro ao atualizar receita");
    }
  };

  const handleAddIngredient = () => {
    if (currentIngredient.trim() !== "") {
      setIngredients([...ingredients, currentIngredient]);
      setCurrentIngredient("");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="title"
          value={formData.title}
          placeholder="Título"
          onChange={handleChange}
        />
        <InputText
          type="url"
          name="photo"
          value={formData.photo}
          placeholder="Link da Imagem"
          onChange={handleChange}
        />
        <InputText
          type="text"
          name="preparationTime"
          value={formData.preparationTime}
          placeholder="Tempo de Preparo"
          onChange={handleChange}
        />
        <InputText
          type="text"
          name="difficulty"
          value={formData.difficulty}
          placeholder="Dificuldade"
          onChange={handleChange}
        />
        <InputText
          type="text"
          name="cost"
          value={formData.cost}
          placeholder="Valor"
          onChange={handleChange}
        />

        <InputText
          type="text"
          placeholder="Ingredientes"
          value={currentIngredient}
          onChange={(e) => {
            setCurrentIngredient(e.target.value);
            setIsInputEmpty(e.target.value === "");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setIngredients([...ingredients, currentIngredient]);
              setCurrentIngredient("");
            }
          }}
        />
        <button
          type="button"
          onClick={handleAddIngredient}
          className={`button-add-ingredient ${isInputEmpty ? "" : "active"}`}
          disabled={isInputEmpty}
        >
          Adicionar Ingrediente
        </button>

        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <InputText type="text" value={ingredient} readOnly />
          </div>
        ))}

        <SelectInput
          id="categorySelect"
          value={formData.categoryId}
          onChange={handleChange}
          name="categoryId"
        >
          <option value="" disabled>
            Selecione uma categoria
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </SelectInput>

        <MessageBox
          type="text"
          name="preparationMethod"
          id="preparationMethod"
          cols="30"
          rows="6"
          value={formData.preparationMethod}
          placeholder="Modo de Preparo"
          onChange={handleChange}
        ></MessageBox>
      </Form>

      <div style={{ marginTop: "10px", marginBottom: "20px" }}>
        <ButtonDefault
          action={handleSubmit}
          bgColor="var(--azul)"
          textColor="var(--preto)"
          type="submit"
        >
          Atualizar
        </ButtonDefault>
      </div>
    </>
  );
};
