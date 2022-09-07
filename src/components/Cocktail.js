import { Link } from "react-router-dom";

const Cocktail = ({ name, img, id }) => {
    return (
        <div className="img-container">
            <Link to={"/cocktail/".concat(id)}>
                <img src={img} alt={name} className="img" />
                <div className="img-text">{name}</div>
            </Link>
            <br></br>
        </div>
    );
};

export default Cocktail;
