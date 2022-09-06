const SearchForm = ({text, onChange}) => {
    return (
        <form style={{ textAlign: 'center' }}>
            <h1> Cocktails API </h1>
            <input 
            type={'text'} 
            className="input" 
            placeholder="Search..."
            value={text}
            onChange={onChange}
            />
        </form>
    );
}

export default SearchForm;