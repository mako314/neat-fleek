

function Search ({setSearchTerm}) {
    return (
        <div className="">
            <form > 
                <input className="flex-auto m-0 border-black bg-slate-600 top-10"  type="search" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} ></input>
            </form>
        </div>
    )
}

export default Search