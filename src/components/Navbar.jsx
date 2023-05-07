import { NavLink } from "react-router-dom";
import { Nav } from "./Styles";

export default function Navbar() {
    return (
        <Nav>
            <NavLink to="/">TeteuFlix</NavLink>
            <ul>
                <li>
                    <NavLink to="/filmes">Filmes</NavLink>
                </li>
                <li>
                    <NavLink to="/series">Séries</NavLink>
                </li>
            </ul>
        </Nav>
    );
}
