import { useState } from "react";
import { Form, InputText, MessageBox } from "./style";
import { ButtonDefault } from "../button-default";


export const FormCreate = () => {
    const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("")

    return (
        <>
            <Form action="">
        <InputText type="text" placeholder="Título" />
        <InputText type="url" placeholder="Link da Imagem" />
        <InputText type="text" placeholder="Tempo de Preparo" />
        <InputText type="text" placeholder="Dificuldade" />
        <InputText type="text" placeholder="Valor" />
        {/* <InputText type="text" placeholder="Ingredientes" /> */}

        <InputText
          type="text"
          placeholder="Ingredientes"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
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
  onClick={() => {
    setIngredients([...ingredients, currentIngredient]);
    setCurrentIngredient("");
  }}
>
  Adicionar Ingrediente
        </button>
        
        {ingredients.map((ingredient, index) => (
  <InputText
    key={index}
    type="text"
    value={ingredient}
    readOnly
  />
))}


        <MessageBox
          name="preparation"
          id="preparation"
          cols="30"
          rows="6"
          placeholder="Modo de Preparo"
        ></MessageBox>
            </Form>
            
            <ButtonDefault bgColor="#c4eff2" textColor="#303030">Cadastrar</ButtonDefault>
        </>
    )
}