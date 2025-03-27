import { Link } from "react-router-dom"
interface Recipe {
    id: number;
    name: string;
    image: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    difficulty: string;
}

type Props = {
    recipes: Recipe[];
};

export const RecipeCard = ({ recipes }: Props) => {
    return (
        <div className="recipes-cards-outer-container">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card-outer-container">
                    <Link to={`/recipes/${recipe.id}`} className="recipe-card-inner-container group">
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="recipe-card-image"
                        />
                        <div className="p-4">
                            <h2 className="recipe-card-title">{recipe.name}</h2>
                            <p className="recipe-card-info">Estimated time: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes</p>
                            <p className="recipe-card-info">Difficulty: {recipe.difficulty}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};