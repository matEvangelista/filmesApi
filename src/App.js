import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Filmes from "./components/Filmes";
import Series from "./components/Series";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <BrowserRouter>
            <header>
              <Navbar/>
            </header>
            <main>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/filmes" element={<Filmes/>}/>
                  <Route path="/series" element={<Series/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}
