import { useEffect, useState } from "react";
import { CardRecipes } from "../../components/card-recipes";
import { Sidebar } from "../../components/sidebar";
import { BodyContent, ContainerCards } from "./style";
import ApiFindAll from "../../services/Api/ApiFindAll";
import { Form, InputGroup } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
import { SearchComponent } from "../../components/search-component";
import { SidebarMobile } from "../../components/sidebar-mobile";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  function getWindowSize() {
    return window.screen.width;
  }

  const FindAll = async () => {
    const res = await ApiFindAll.RecipesFindAll();
    let list = res.data.data;
    setRecipes(list);
    setFilteredRecipes(list);
  };

  const findAllCategories = async () => {
    const res = await ApiFindAll.CategoriesFindAll();
    let list = res.data.data;
    setCategories(list);
  };

  useEffect(() => {
    FindAll();
    findAllCategories();
  }, []);

  function filterBySearch(value) {
    if (recipes.length === 0) {
      return;
    }

    let filteredRecipes = recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(value.toLowerCase()) ||
        r.difficulty.toLowerCase().includes(value.toLowerCase())
      // || r.categoryId.toLowerCase().includes(value.toLowerCase())
      //|| c.steering.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRecipes(filteredRecipes);
  }

  function filterByCategory(category) {
    setSelectedCategory(category);
    filterRecipesByCategory(category);
  }

  function filterRecipesByCategory(category) {
    if (category === "") {
      setFilteredRecipes(recipes);
    } else {
      const selectedCategoryId = categories.find(
        (c) => c.name === category
      )?.id;

      if (selectedCategoryId) {
        const filteredRecipes = recipes.filter(
          (r) => r.categoryId === selectedCategoryId
        );
        setFilteredRecipes(filteredRecipes);
      }
    }
  }

  return (
    <>
      {windowSize < 801 ? <SidebarMobile /> : null}
      <div className="home-page">
        <div className="card-1">
          <div className="card-2">
            {windowSize > 800 ? <Sidebar /> : null}
            <BodyContent>
              <ContainerCards>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <SearchComponent
                    filterBySearch={filterBySearch}
                    placeholder="Buscar receitas..."
                  />

                  <Form.Group style={{ marginLeft: "5px" }}>
                    <InputGroup>
                      <InputGroup.Text>
                        <FiFilter title="Filtro" />
                      </InputGroup.Text>
                      <Form.Select
                        value={selectedCategory}
                        onChange={(e) => filterByCategory(e.target.value)}
                      >
                        <option value="">Todas</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </div>

                {filteredRecipes.length > 0 ? (
                  filteredRecipes
                    .sort((a, b) =>
                      a.title.toUpperCase().localeCompare(b.title.toUpperCase())
                    )
                    .map((recipe) => {
                      return (
                        <CardRecipes
                          key={recipe.id}
                          recipe={recipe}
                          setRecipeSelected={setRecipeSelected}
                        />
                      );
                    })
                ) : (
                  <p>Loading recipes...</p>
                )}
              </ContainerCards>
            </BodyContent>
          </div>
        </div>
      </div>
    </>
  );
};
