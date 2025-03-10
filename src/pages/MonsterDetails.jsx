import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function MonsterDetails() {
    /*PARAMETROS DINAMICOS PARA DETAILS*/ 
  const parametrosDinamicos = useParams();
  console.log(parametrosDinamicos.monsterId);

  const [monster, setMonster] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5005/monsters/${parametrosDinamicos.monsterId}?_expand=category`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setMonster(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [parametrosDinamicos.monsterId]);

    if(monster === null){
        return(
            <div>
                <h3>Buscando data del monstruo...</h3>
            </div>
            
        )
    }

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
    {/*<Link to={`/edit-monster/${parametrosDinamicos.monsterId}`}><button>Editar</button></Link>*/}
    <Link to="/"><button>Back</button></Link>
    </div>
    
    </div>
  )
}

export default MonsterDetails