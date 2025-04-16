import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Trailerpage = ({movies}) => {
    const {index}=useParams()
    const navigate=useNavigate()
    const movie=movies[parseInt(index)]
  return (
    <div className='d-flex flex-column align-items-center justify-content-center gap-3' style={{height:'100vh', background:'rgb(0,0,0,0.8)'}}>
        
        <iframe width="740" height="440" src={movie.t_link} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
        <h3 style={{color:"goldenrod",fontSize:46,fontWeight:"bold"}}>{movie.title}</h3>
        <p style={{color:"gainsboro",fontSize:26}}>{movie.description}</p>
        <button  className='btn btn-warning btn-lg' onClick={()=>navigate('/')}>Home Page</button>
    </div>
  );
};

export default Trailerpage;