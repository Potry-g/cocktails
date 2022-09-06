const Cocktail = ({ name, id, img }) => {
    return (
        <div className="img-container">
            <a href={img}>
                <img src={img} alt={name} className="img" />
                <div className="img-text">{name}</div>
            </a>
            <br></br>
        </div>
    );
};

export default Cocktail;
