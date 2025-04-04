import { useEffect, useState } from "react";
import { PageWrapper } from "../components/PageWrapper"
import { RecipeCard } from "../components/RecipeCard";
import Loading from "../components/Loading";
import SearchInput from "../components/SearchInput";

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
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes?limit=50')
            .then(res => res.json())
            .then(data => {
                setRecipes(() => data.recipes)
                setAllRecipes(data.recipes);
                setIsPending(false);
            });
    }, [])

    function searchHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const query = event.target.value.trim();

        if (query === "") {
            setRecipes(allRecipes); // Reset to full list when input is empty
            return;
        }

        fetch(`https://dummyjson.com/recipes/search?q=${query}`)
            .then(res => res.json())
            .then(data => setRecipes(data.recipes)); // Update state with search results
    }
    return (
        <PageWrapper>
            <SearchInput searchHandler={searchHandler} />
            {isPending && <Loading />}
            {recipes.length > 0 && <RecipeCard recipes={recipes} />}
        </PageWrapper>
    );
}

export default Home;