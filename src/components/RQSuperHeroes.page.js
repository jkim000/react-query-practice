import axios from "axios";
import { useQuery } from "react-query";

/**
 * Using react-query instead of the more traditional way without it
 */

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
    // first arg is a unique key for this useQuery
    // second arg is a fn that returns a promise (notice the fetch is done outside the component)
    const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <h2>RQ Superheroes Page</h2>
            {data?.data.map((hero) => {
                return <div key={hero.alterEgo}>{hero.alterEgo}</div>;
            })}
        </>
    );
};
