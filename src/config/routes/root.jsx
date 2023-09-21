import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Recipes } from "../../pages/recipes";
import { Recipe } from "../../pages/recipe";
import { About } from "../../pages/about";
import { NotFound } from "../../pages/not-found";
import { CreateRecipe } from "../../pages/create-recipe";
import UpdateRecipe from "../../pages/update-recipe";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/recipes/update/:id" element={<UpdateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};
