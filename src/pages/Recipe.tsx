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
            .then((data) => setRecipe(data));
    }, [id]);

    if (!recipe) return <Loading />;

    return (
        <PageWrapper>

            <div className="max-w-3xl mx-auto p-4">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-64 object-cover rounded-t-2xl"
                    />

                    <div className="p-6">
                        <h2 className="text-3xl font-bold text-gray-800">{recipe.name}</h2>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {recipe.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 text-sm bg-blue-200 text-blue-800 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
                            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
                            <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
                            <p><strong>Total Time:</strong> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</p>
                            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                            <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
                            <p><strong>Servings:</strong> {recipe.servings}</p>
                            <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-yellow-500">
                            <span className="text-xl font-bold">{recipe.rating}</span>
                            <span>⭐ ({recipe.reviewCount} reviews)</span>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-700">Ingredients</h3>
                            <ul className="list-disc list-inside text-gray-600 mt-2">
                                {recipe.ingredients.map((ingredient) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-700">Instructions</h3>
                            <ol className="list-decimal list-inside text-gray-600 mt-2">
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
