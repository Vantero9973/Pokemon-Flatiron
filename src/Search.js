function Search({ setSearch }) {
    let handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="ui-search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search Pokémon" onChange={handleChange} />
                <i className="search icon" />
            </div>
        </div>
    );
}

export default Search;