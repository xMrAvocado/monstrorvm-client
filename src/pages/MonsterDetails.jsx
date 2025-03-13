import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function MonsterDetails() {
  const parametrosDinamicos = useParams();
  //console.log(parametrosDinamicos.monsterId);

  const navigate = useNavigate();

  const [monster, setMonster] = useState(null);
  
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/monsters/${parametrosDinamicos.monsterId}?_expand=category`)
        .then((response) => {
          console.log("Then");
          //console.log(data);
          setMonster(response.data);
        })
        .catch((error) => {
          console.log("Catch", error);
          navigate(`/error`);
        });
    }, [parametrosDinamicos.monsterId]);

    if(monster === null){
        return(
            <div style={{ textAlign: "center", paddingTop: "200px", alignItems:"center" }}>
                <h3>Buscando data del monstruo...</h3>
                <ClipLoader color="#9a1b1b"/>
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