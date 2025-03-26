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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 ">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="m-4 bg-white rounded-2xl shadow-2xl">
                    <Link to={`/recipes/${recipe.id}`} className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        {/* Image Section */}
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="w-full h-64 object-cover rounded-tl-2xl rounded-tr-2xl group-hover:opacity-80 transition-opacity duration-300"
                        />

                        {/* Recipe Info */}
                        <div className="p-4">
                            <h2 className="font-semibold text-2xl text-gray-800 group-hover:text-amber-500 transition-colors duration-300">{recipe.name}</h2>
                            <p className="text-gray-600">Estimated time: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes</p>
                            <p className="text-gray-600">Difficulty: {recipe.difficulty}</p>
                        </div>
                    </Link>

                </div>
            ))}
        </div>
    );
};
