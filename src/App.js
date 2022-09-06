import { useState } from "react";
import CocktailList from "./components/CocktailList";
import SearchForm from "./components/SearchForm";

function App() {
    const [text, setText] = useState("");

    const onFormChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="main">
            <SearchForm text={text} onChange={onFormChange} />
            <CocktailList text={text} />
        </div>
    );
}

export default App;
