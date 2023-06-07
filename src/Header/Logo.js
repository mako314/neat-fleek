function Logo ({logo}) {
    return (
        <div className="flex">
            <span className="logo">
                <img src={logo}/>
            </span>
        </div>
    )
}

export default Logo