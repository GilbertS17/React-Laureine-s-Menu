import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import Loading from "../components/Loading";

interface Recipe {
    id: number;
    name: string;
    image: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    servings: number;
    rating: number;
    reviewCount: number;
    ingredients: string[];
    instructions: string[];
    tags: string[];
    mealType: string[];
}

export const Recipe = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data))
    }, [id]);

    if (!recipe) return <Loading />;

    return (
        <PageWrapper>
            <div className="recipe-outer-container">
                <div className="recipe-inner-container">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="recipe-image"
                    />

                    <div className="p-6">
                        <h2 className="recipe-title">{recipe.name}</h2>

                        <div className="tags-container">
                            {recipe.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="recipe-infos">
                            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
                            <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
                            <p><strong>Total Time:</strong> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</p>
                            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                            <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
                            <p><strong>Servings:</strong> {recipe.servings}</p>
                            <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
                        </div>

                        <div className="recipe-rating">
                            <span className="recipe-rating-text">{recipe.rating}</span>
                            <span>⭐ ({recipe.reviewCount} reviews)</span>
                        </div>

                        <div className="mt-6">
                            <h3 className="recipe-subtitle">Ingredients</h3>
                            <ul className="recipe-list-sub-infos">
                                {recipe.ingredients.map((ingredient) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="recipe-subtitle">Instructions</h3>
                            <ol className="recipe-decimal-sub-infos">
                                {recipe.instructions.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};
