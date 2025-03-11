import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function MonsterDetails() {
  const parametrosDinamicos = useParams();
  //console.log(parametrosDinamicos.monsterId);

  const navigate = useNavigate();

  const [monster, setMonster] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5005/monsters/${parametrosDinamicos.monsterId}?_expand=category`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data);
          setMonster(data);
        })
        .catch((error) => {
          //console.log(error);
        });
    }, [parametrosDinamicos.monsterId]);

    if(monster === null){
        return(
            <div>
                <h3>Buscando data del monstruo...</h3>
            </div>
            
        )
    }
    const deleteMonster = () => {
      axios.delete(`http://localhost:5005/monsters/${parametrosDinamicos.monsterId}`)
      .then(()=>{
        navigate(`/`)
      })
      .catch((error)=>{
        console.log(error)
      })
    }; 
  return (
    <div id="detallesMonstruo">
    <img
        src={monster.image}
        alt=""
        width="300px"
        height="300px"
        style={{ textAlign: "center", margin: "5px" }}
    />
    <h1 style={{ textAlign: "center", margin: "5px" }}>{monster.name}</h1>
    <p>{monster.description}</p>
    <div id="btnsDetails">
    <Link to={`/monsters/edit/${parametrosDinamicos.monsterId}`}><button>Edit</button></Link>
    <Link to="/"><button>Back</button></Link>
    <button onClick={deleteMonster}>Delete</button>
    </div>
    
    </div>
  )
}

export default MonsterDetails