import "./topbar.css"

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="home-button">
                home
            </div>
            <div className="searchbar">
                <form id="form"> 
                <input type="search" id="userSearch" placeholder="Search..."></input>
                <button>Search</button>
                </form>
            </div>
        </div>
    )
}