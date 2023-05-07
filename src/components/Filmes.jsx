import { Container, Filme, FilmesContainer, Wait } from "./Styles";
import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import AboutMovie from "./AboutMovie";

export default function Filmes() {
    const { data, loading, error } = useFetch("movie");

    const [a, setA] = useState(true);

    if (loading)
        return (
            <Wait>
                <h1>Um momento...</h1>
            </Wait>
        );
    if (error != null)
        return (
            <Container>
                <p>Algo deu errado</p>
            </Container>
        );
    return (
        <Container>
            <FilmesContainer>
                {data.map((filme) => (
                    <AboutMovie
                        poster={filme.poster_path}
                        overview={filme.overview}
                        vote_average={filme.vote_average}
                        title={filme.title}
                    />
                ))}
            </FilmesContainer>
        </Container>
    );
}
