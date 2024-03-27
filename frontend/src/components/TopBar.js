import "./topbar.css"
import { useNavigate, Link } from "react-router-dom";
import { URL } from '../index.js'


export default function TopBar() {
    const navigate = useNavigate()

    async function handleSearch() {

        const toSearch = document.querySelector('#userSearch').value
        document.querySelector('#userSearch').value = ''

        // find user 
        try {
            const res = await fetch(`${URL}/api/users/get/byusername/${toSearch}`)
            const uid = await res.json()

            if (uid !== "False") {
               navigate("/page/"+uid)
            }
        }
        
        catch(err) {
            console.log(err)
        }
        
    }




    return (
        <div className="topbar">
            <div className="home-button">
                <Link to={"/home"}> Home </Link> 
            </div>
            <div className="searchbar">
                <form id="form"> 
                <input type="search" id="userSearch" placeholder="Search..."></input>
                <button id="search-button" type="button" onClick={handleSearch}>Search</button>
                </form>
            </div>
        </div>
    )
}