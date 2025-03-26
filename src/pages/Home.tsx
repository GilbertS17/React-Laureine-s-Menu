import { useEffect, useState } from "react";
import { PageWrapper } from "../components/PageWrapper"
import { RecipeCard } from "../components/RecipeCard";
import Loading from "../components/Loading";

interface Recipe {
    id: number;
    name: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    image: string;
    difficulty: string;
}

const Home = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes?limit=30')
            .then(res => res.json())
            .then(data => {
                setRecipes(() => data.recipes)
                setIsPending(false);
            });
    }, [])
    return (
        <PageWrapper>
            {isPending && <Loading />}
            {recipes.length > 0 && <RecipeCard recipes={recipes} />}
        </PageWrapper>
    );
}

export default Home;