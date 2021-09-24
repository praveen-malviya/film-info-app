import Searchbar from "./SearchBar";

const Header = () => {
    return (   
    <div className="header">
        <h1>FilmInfo</h1>
        <Searchbar />
        <nav>
        <a href="/movie">Movies</a>
        <a href="/series">Tv Series</a>
        </nav>
    </div> );
}
 
export default Header;