import { createPortal } from "react-dom";
import "./RecipeModal.css";

const RecipeModal = ({ dish, recipe, onClose }) => {
  if (!dish) return null;
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Рецепт: {dish}</h2>
        <p>{recipe}</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default RecipeModal;
