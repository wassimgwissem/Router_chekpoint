import React from 'react';
import { useState } from 'react';
import MovieList from './MovieList';
const Home = ({movies,setMovies}) => {
    const[showForm,setShowForm]=useState(false);
      const [newTitle,setNewTitle]=useState('');
      const[newDescription,setNewDescription]=useState('');
      const[newPosterURL,setNewPosterURL]=useState('');
      const[newRate,setNewRate]=useState('')
      const[newtrailer,setNewtrailer]=useState('')

    
    const handleAdd=()=>{
      const newObject = {};
      newObject.title=newTitle;
      newObject.description=newDescription;
      newObject.poster=newTitle;
      newObject.rating=Number(newRate);
      newObject.t_link=newtrailer;
      setMovies([...movies, newObject]);
      setNewTitle('')
      setNewDescription('')
      setNewPosterURL('')
      setNewRate('')
      setNewtrailer('')
    }
  return (
    <div>
        <MovieList movies={movies}/>
        {!showForm&&(
        <div style={{position: "fixed",bottom: "7vh",right: "3vw",background:"rgba(255,255,255,0.8)",padding: "20px",borderRadius: "15px"}}>
            <div className="d-flex flex-column gap-3">
                <label>New Title: <input type="text" value={newTitle} className="form-control"  onChange={(e)=>setNewTitle(e.target.value)}/></label>
                <label>New Description: <input type="text" className="form-control" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} /></label>
                <label>New PosterURL: <input type="text" className="form-control" value={newPosterURL} onChange={(e)=>setNewPosterURL(e.target.value)}/></label>
                <label>New Rate: <input type="text" className="form-control"  value={newRate} onChange={(e)=>setNewRate(e.target.value)}/></label>
                <label>New Trailer_link: <input type="text" className="form-control"  value={newtrailer} onChange={(e)=>setNewtrailer(e.target.value)}/></label>

                <button onClick={handleAdd} className="btn btn-warning mt-2">Add Movie</button>
          
            </div>
        </div>
      )}

      <div onClick={()=>setShowForm(!showForm)} style={{position: "fixed",bottom: "2vh",right: "1vw",fontSize: "5vh",color: "white",cursor: "pointer"}}>
        <i className="fa-solid fa-circle-plus"></i>
      </div>
          
    </div>
  );
};

export default Home;