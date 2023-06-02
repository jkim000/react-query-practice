import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import "./App.css";

function App() {
    // this queryClient combined with the Provider at the top level of the jsx
    // gives all children access to the hooks react-query provides
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/super-heroes">TradSuperheroes</Link>
                        </li>
                        <li>
                            <Link to="/rq-super-heroes">RQ Superheroes</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/super-heroes" element={<SuperHeroesPage />} />
                    <Route
                        path="/rq-super-heroes"
                        element={<RQSuperHeroesPage />}
                    />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
