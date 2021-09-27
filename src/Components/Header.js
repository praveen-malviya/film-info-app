
import { Link
} from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
    return (   
    <div className="header">
        <h1>FilmInfo</h1>
        <nav>
        <Link to="/"> Search </Link>
        <Link to="/movies">MyMovies</Link>
        {/* <Link to="/series">Tv Series</Link> */}
        </nav>
    </div> );
}
 
export default Header;