import { useEffect, useState } from "react";
import SearchResult from "./searchResult";

const SearchBar = () => {

    const [searchData, setSearchData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const [favouriteMovies, setFavouriteMovies] = useState([]);

    const [firstRender, setFirstRender] = useState(true)

    
    const getServerData = async () => {
        const response = await fetch('https://movie-rest-api-default-rtdb.firebaseio.com/movieData.json?print=pretty')
        const data = await response.json();
          setFavouriteMovies(data)
    }

    useEffect(() => {
        async function searchData(){
        
        const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=9a56b02956f9ea057fae8e46c5a53d3c&query="+searchQuery);
        const data = await response.json();
        setSearchData(data.results); 
        // console.log(data.results) 
    }
    searchData();
    }, [searchQuery])

    // const getInfo = (id) => {

    //     console.log("inside getInfo")
    //     async function getInfoData(idN){

    //         console.log("inside getInfoData")
    //         const responseD = await fetch(`https://api.themoviedb.org/3/movie/${idN}?api_key=9a56b02956f9ea057fae8e46c5a53d3c`);
    //         const dataD = await responseD.json();
    //         console.log(dataD)
    //         setDetailData(dataD) 
    //     }
    //     getInfoData(id);
    // }

    const postServer = async (id) => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9a56b02956f9ea057fae8e46c5a53d3c`);
            const data = await response.json();
            // console.log(data)
            setFavouriteMovies([...favouriteMovies, data]) 
    
    }

    useEffect(() => {
        if(!firstRender){
        fetch('https://movie-rest-api-default-rtdb.firebaseio.com/movieData.json', {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(favouriteMovies)
        })}else{
            getServerData();
            setFirstRender(false)
        }

      }, [favouriteMovies]);
    
    return ( 
        <div className="searchBar">
            <input id="searchInput" type="text" onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Search for Movies..."/>
            <SearchResult searchData = { searchData } postServer = { postServer }/>
        </div>
     );
}
 
export default SearchBar;