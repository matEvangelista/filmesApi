import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 0;
    ul {
        display: flex;
        gap: 1rem;
    }
    a {
        color: white;
        text-decoration: none;
        &.active {
            font-weight: bold;
        }
    }
`;

export const Container = styled.nav`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
`

export const FilmesContainer = styled.section`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
`

export const Filme = styled.section`
    img {
        width: 80%;
        border-radius: inherit;
        padding: .5rem;
        border: 1px solid white;
    }
    background-color: rgb(9, 10, 68);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    gap: .5rem;
    border-radius: 10px;
    box-shadow: 0 0 2px black;
`

export const Wait = styled.div`
    color: white;
    font-size: 3rem;
    margin: 0 auto;
    text-align: center;
`