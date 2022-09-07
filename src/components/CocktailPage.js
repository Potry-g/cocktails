import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const CocktailPage = () => {
    const { id } = useParams();

    const { data, loading, error } = useAxios(
        "https://thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(id)
    );

    if (loading) return <h1> LOADING. . . </h1>;
    if (error) console.log(error);

    const searchIngredients = (elm) => {
        let check = "strIngredient1";
        let num = 2;
        let ing = [];
        for (let key in elm) {
            if (key === check) {
                if (elm[key] === null || num > 15) break;
                else {
                    ing.push(elm[key]);
                    check = "strIngredient".concat(num);
                    num++;
                }
            }
        }
        return ing;
    };

    return (
        <div className="drink-page">
            {data ? (
                data.drinks[0] ? (
                    <>
                        <img
                            src={data.drinks[0].strDrinkThumb}
                            alt={data.drinks[0].strDrink}
                            className="img-page"
                        />
                        <div style={{ paddingLeft: "10%" }}>
                            <h1>{data.drinks[0].strDrink}</h1>
                            <h3>{data.drinks[0].strInstructions}</h3>
                            <ul className="ing-list">
                                {searchIngredients(data.drinks[0]).map(
                                    (elm) => (
                                        <li>{elm}</li>
                                    )
                                )}
                            </ul>
                            <Link to="/">
                                <button className="return-btn">
                                    All Cocktails
                                </button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <h1>Cocktail Not Found.</h1>
                )
            ) : (
                <h1>Could Not Load Cocktail</h1>
            )}
        </div>
    );
};

export default CocktailPage;
