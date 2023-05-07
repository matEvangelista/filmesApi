import { Container, FilmesContainer, Wait } from "./Styles";
import useFetch from "../useFetch";
import AboutMovie from "./AboutMovie";

export default function Series() {
    const { data, loading, error } = useFetch("tv");

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
                {data.map((serie) => (
                    <AboutMovie
                        poster={serie.poster_path}
                        overview={serie.overview}
                        vote_average={serie.vote_average}
                        title={serie.name}
                    />
                ))}
            </FilmesContainer>
        </Container>
    );
}