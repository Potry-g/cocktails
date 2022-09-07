import useAxios from "../hooks/useAxios";
import Cocktail from "./Cocktail";

const CocktailList = ({ text }) => {
    const { data, loading, error } = useAxios(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(
            text.toLowerCase()
        )
    );

    if (loading) return <h1> LOADING. . . </h1>;
    if (error) console.log(error);

    return (
        <>
            {data ? (
                data.drinks ? (
                    <div className="cocktails">
                        {data.drinks.map((elm) => (
                            <Cocktail
                                name={elm.strDrink}
                                img={elm.strDrinkThumb}
                                key={elm.idDrink}
                                id={elm.idDrink}
                            />
                        ))}
                    </div>
                ) : (
                    <h1>No Drinks Matched Your Search.</h1>
                )
            ) : (
                <h1>Can Not Fetch Data.</h1>
            )}
        </>
    );
};

export default CocktailList;
