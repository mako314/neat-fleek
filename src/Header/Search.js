

function Search ({searchIcon}) {
    return (
        <div>
            <form>
                <input className="flex-auto border-black bg-slate-600" type="search" placeholder="Search..."></input>{searchIcon}
            </form>
        </div>
    )
}

export default Search