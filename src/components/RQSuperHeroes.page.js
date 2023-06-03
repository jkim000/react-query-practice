import { useState } from "react";
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
    // options include...
    // { cacheTime: timeInMs } (default 5 min) data stays cached for time frame, fetches from cache instead of api within timeframe
    // { staleTime: timeInMs } (default 0 sec) data stays fresh for timeframe, app won't re-fetch even from cache within timeframe, but will if past the timeframe
    // { refetchOnMount: boolean } (default true) re-fetches everytime on component mount
    // { refetchOnWindowFocus: boolean or 'always' } (default false) re-fetches every time on window focus
    // { refetchInterval: false or timeInMs } (default false) refetch query at listed interval, pauses on window losing focus
    // { refetchIntervalInBackground: false or timeInMs } (default false) refetch query at listed interval even in background
    // { enabled: false } turns off the useQuery
    // can enable fetch onClick using refetch from the destructured refetch var in useQuery, subject to all cache and staleTime
    // { onSuccess: fn(data) } handle side effects on success
    // { onError: fn(error) } handle side effects on error
    // { select: (data) => return transformedData } select receives the data as an arg. you can then do what you want with the data like transform or filter.
    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
        "super-heroes",
        fetchSuperHeroes,
        {
            select: (data) => {
                const onlyAlterEgoNames = data?.data.map(
                    (hero) => hero.alterEgo
                );
                return onlyAlterEgoNames;
            },
        }
    );

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>RQ Superheroes Page</h2>
            {data?.map((hero) => {
                return <div key={hero}>{hero}</div>;
            })}
        </>
    );
};
