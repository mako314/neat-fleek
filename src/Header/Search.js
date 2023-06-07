

function Search ({setSearchTerm}) {
    return (
        <div className="search-container">
            <form > 
                <input className="search-bar"  type="search" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} ></input>
            </form>
        </div>
    )
}

export default Search