const Cocktail = ({ name, id, img }) => {
    return (
        <div className="cocktail">
            <h3>{name}</h3>
            <img src={img} alt={name} className="img" />
        </div>
    );
};

export default Cocktail;
