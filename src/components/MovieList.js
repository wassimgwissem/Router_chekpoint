import { useState } from "react";
import Filter from "./Filter";


const MovieList = ({movies}) => {
  const[titlef,setTitlef]=useState("")
  const[ratef,setRatef]=useState("")
  

  
  return (
    <>

      <div style={{position:"fixed", top:"4vh",right:"2vw"}}>
          <div className="input-container">
            <input type="text" onChange={(e)=>setRatef(e.target.value)} name="number" className="input" placeholder="filter by rate..."/>
            <span className="icon"> 
              <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </span>
          </div>
          <div className="input-container">
            <input type="text" onChange={(e)=>setTitlef(e.target.value)} name="text" className="input" placeholder="filter by title..."/>
            <span className="icon"> 
              <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </span>
          </div>
      </div>
      <div style={{display:"flex", height:"100vh",justifyContent:"space-around",alignItems:"center",background:"linear-gradient(to right, #d62e00, #ffcc00)"}}>
        <Filter title={titlef} rate={ratef} movies={movies} />
      </div >
      


             
            <style>
              {`
                .input-container {
                  width: 220px;
                  position: relative;
                }

                .icon {
                  position: absolute;
                  right: 10px;
                  top: calc(50% + 5px);
                  transform: translateY(calc(-50% - 5px));
                }

                .input {
                  width: 100%;
                  height: 40px;
                  padding: 10px;
                  transition: .2s linear;
                  border: 2.5px solid orange;
                  font-size: 14px;
                  letter-spacing: 2px;
                }

                .input:focus {
                  outline: none;
                  border: 0.5px solid orange;
                  box-shadow: -5px -5px 0px orange;
                }

                .input-container:hover > .icon {
                  animation: anim 1s linear infinite;
                }

                @keyframes anim {
                  0%,
                  100% {
                    transform: translateY(calc(-50% - 5px)) scale(1);
                  }

                  50% {
                    transform: translateY(calc(-50% - 5px)) scale(1.1);
                  }
                }
              `}
            </style>
    </>
  );
};

export default MovieList;