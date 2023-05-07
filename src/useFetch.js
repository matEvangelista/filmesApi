import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(type ) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // começa carregando por padrão
    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/${type}/popular?api_key=e7158e992adf7c4e90bd637caa889ece&language=pt-BR&page=1`
            )
            .then((response) => {
                setData(response.data.results);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return { data, loading, error };
}
