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
      fetch(`${import.meta.env.VITE_SERVER_URL}/monsters/${parametrosDinamicos.monsterId}?_expand=category`)
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
      let text = "Are you sure you want to delete it?"
      if (confirm(text) == true){
        axios.delete(`${import.meta.env.VITE_SERVER_URL}/monsters/${parametrosDinamicos.monsterId}`)
        .then(()=>{
          navigate(`/`)
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    }; 
  return (
    <div id="monsterDetails">
    <img
        src={monster.image}
        alt=""
        width="300px"
        height="300px"
        id="monsterImg"
    />
    <h1 id="monsterName">{monster.name}</h1>
    <p id="monsterDescription">{monster.description}</p>
    <div id="btnsDetails">
    <Link to={`/monsters/edit/${parametrosDinamicos.monsterId}`}><button>Edit</button></Link>
    <button onClick={deleteMonster}>Delete</button>
    </div>
    <div id="btnsDetails2">
    <Link to="/"><button>Back</button></Link>
    </div>
    </div>
  )
}

export default MonsterDetails