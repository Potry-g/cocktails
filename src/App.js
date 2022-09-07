import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CocktailList from "./components/CocktailList";
import CocktailPage from "./components/CocktailPage";
import SearchForm from "./components/SearchForm";

function App() {
    const [text, setText] = useState("");

    const onFormChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="main">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <SearchForm text={text} onChange={onFormChange} />
                            <CocktailList text={text} />
                        </>
                    }
                />
                <Route path="/cocktail/:id" element={<CocktailPage />} />
            </Routes>
        </div>
    );
}

export default App;
