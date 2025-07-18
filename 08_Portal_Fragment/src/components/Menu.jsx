import { Fragment, useState } from "react";
import RecipeModal from "./RecipeModal";
import './Menu.css';

const menuData = [
  {
    section: "Салати",
    dishes: [
      {
        name: "Грецький салат",
        ingredients: ["помідори", "огірки", "фета", "оливки", "оливкова олія"]
      },
      {
        name: "Цезар",
        ingredients: ["курка", "салат романо", "пармезан", "сухарики", "соус цезар"]
      }
    ]
  },
  {
    section: "Закуски",
    dishes: [
      {
        name: "Брускетта",
        ingredients: ["хліб", "помідори", "базилік", "оливкова олія"]
      }
    ]
  },
  {
    section: "Супи",
    dishes: [
      {
        name: "Борщ",
        ingredients: ["буряк", "картопля", "морква", "капуста", "м'ясо"]
      }
    ]
  },
  {
    section: "Основні страви",
    dishes: [
      {
        name: "Котлета по-київськи",
        ingredients: ["куряче філе", "масло вершкове", "панірувальні сухарі", "яйце"]
      }
    ]
  }
];

const recipes = {
  "Грецький салат": "1. Нарізати овочі. 2. Додати фету та оливки. 3. Заправити олією.",
  "Цезар": "1. Обсмажити курку. 2. Змішати з салатом, сиром, сухариками. 3. Додати соус.",
  "Брускетта": "1. Підсмажити хліб. 2. Додати помідори, базилік, олію.",
  "Борщ": "1. Зварити бульйон. 2. Додати овочі. 3. Варити до готовності.",
  "Котлета по-київськи": "1. Загорнути масло у філе. 2. Обваляти у сухарях і в яйці. 3. Смажити до золотистої скоринки."
};

function Menu() {
  const [selectedDish, setSelectedDish] = useState(null);
  return (
    <div className="menu">
      <h2>Меню ресторану</h2>
      {menuData.map((section) => (
        <Fragment key={section.section}>
          <div className="menu-section">
            <h3>{section.section}</h3>
            <div className="dishes-list">
              {section.dishes.map((dish) => (
                <div className="dish-card" key={dish.name}>
                  <strong>{dish.name}</strong>
                  <ul>
                    {dish.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                  <button onClick={() => setSelectedDish(dish.name)}>
                    Показати рецепт
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      ))}
      <RecipeModal dish={selectedDish} recipe={recipes[selectedDish]} onClose={() => setSelectedDish(null)} />
    </div>
  );
};

export default Menu;
