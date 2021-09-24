import { useEffect, useState } from "react";

const SearchBar = () => {

    const [searchData, setSearchData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [detailData, setDetailData] = useState(null);

    useEffect(() => {
        async function searchData(){
        
        const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=9a56b02956f9ea057fae8e46c5a53d3c&query="+searchQuery);
        const data = await response.json();
        setSearchData(data.results); 
        console.log(data.results) 
    }
    searchData();
    }, [searchQuery])

    const getInfo = (id) => {

        console.log("inside getInfo")
        async function getInfoData(idN){

            console.log("inside getInfoData")
            const responseD = await fetch(`https://api.themoviedb.org/3/movie/${idN}?api_key=9a56b02956f9ea057fae8e46c5a53d3c`);
            const dataD = await responseD.json();
            console.log(dataD)
            setDetailData(dataD) 
            console.log("ID"+dataD.results)
        }
        getInfoData(id);
    }

    return ( 
        <div className="searchBar">
            <input id="searchInput" type="text" onChange={(e)=> setSearchQuery(e.target.value)}/>
            <div className="movieTile">
        {searchData && (searchData.map(data =>
            <div key={data.id} onClick={()=> getInfo(data.id)}>
                <img src={"https://image.tmdb.org/t/p/w200/"+data.poster_path} alt="Not Available" />
            <h6>{data.original_title}</h6>
            {/* <p>{data.overview}</p> */}
            </div>
            ))
        }
        </div>

        <hr />
        {detailData && <h2>hey there</h2>
        }

        </div>
     );
}
 
export default SearchBar;