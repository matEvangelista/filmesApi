import { Filme } from "./Styles"

export default function AboutMovie({title, overview, vote_average, poster}) {
    return(
        <Filme>
            <h2>{title}</h2>
            <img src ={`https://image.tmdb.org/t/p/original/${poster}`} alt={title}/>
            <p>{overview}</p>
            <p>Avaliação média: {vote_average}</p>
        </Filme>
    )
}