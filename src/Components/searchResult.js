import noMedia from "../Images/noMedia.png"

const SearchResult = ({ searchData, postServer }) => {
    console.log(searchData)
    return ( 
        <div className="searchResult">

            {/* <img src={noMedia} alt="" /> */}
            <div className="movieTile">
                {searchData && (searchData.map(data =>
                    <div key={data.id} 
                     // onClick={()=> getInfo(data.id)}
                    >
                    {data.poster_path ? (<img src={("https://image.tmdb.org/t/p/w200/"+data.poster_path)} alt="Movie Poster" 
                    />):(
                        <img src={noMedia} alt="NoMovie poster" />
                    )}
                    <h5>{data.original_title}</h5>
                    {data.release_date && <h5>Released: {data.release_date.slice(0, 4)} </h5>}
                    
                    <span className="rating"> Rated : {data.vote_average} </span>
                
                    
                     <button onClick={() => postServer(data.id)}>+MyMovies</button>
                    </div>
            ))}
            </div>
            

        </div>
     );
}
 
export default SearchResult;