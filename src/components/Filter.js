import MovieCard from "./MovieCard";


const Filter = ({ title,rate,movies }) => {
  const Object=movies.map((element,index)=> <MovieCard index={index} key={index} element={element}/>)
  const searchTitle =title.trim().toLowerCase()
  const searchRate = rate.trim()



  const newF = movies.filter((element) =>
    element.title.toLowerCase().includes(searchTitle)&&
    element.rating.toString().includes(searchRate)
  ).map((element, index) => 
    <MovieCard key={index} element={element} index={index}/>
  );



  return (
    <>
      {
        searchRate===""&&searchTitle===""?Object:newF
      }
    </>
  );
}
export default Filter;