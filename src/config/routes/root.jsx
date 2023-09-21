import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Recipes } from "../../pages/recipes";
import { Recipe } from "../../pages/recipe";
import { About } from "../../pages/about";
import { NotFound } from "../../pages/not-found";
import { CreateRecipe } from "../../pages/create-recipe";
import UpdateRecipe from "../../pages/update-recipe";

export const Root = ({HandledarkMode,checar,decreaseFontSize,increaseFontSize}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar} HandledarkMode={HandledarkMode} />} />
        <Route path="/recipes" element={<Recipes increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar} HandledarkMode={HandledarkMode} />} />
        <Route path="/recipe/:id" element={<Recipe increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar} HandledarkMode={HandledarkMode} />} />
        <Route path="/about" element={<About increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar} HandledarkMode={HandledarkMode} />} />
        <Route path="*" element={<NotFound increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar} HandledarkMode={HandledarkMode} />} />
        <Route path="/create" element={<CreateRecipe increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar} HandledarkMode={HandledarkMode} />} />
        <Route path="/recipes/update/:id" element={<UpdateRecipe increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar} HandledarkMode={HandledarkMode} />} />
      </Routes>
    </BrowserRouter>
  );
};
