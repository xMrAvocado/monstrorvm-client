import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function MonsterDetails() {
    /*PARAMETROS DINAMICOS PARA DETAILS*/ 
  const parametrosDinamicos = useParams();
  console.log(parametrosDinamicos.monsterId);

  const [allMonsters, setAllMonsters] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5005/monsters")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data);
          setAllMonsters(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  const foundMonster = allMonsters.find((eachMonster) => {
    if (eachMonster.id === parametrosDinamicos.monsterId) {
        console.log(eachMonster.id)
      return true
    } else {
      return false
    }
    
  })



  return (
    <div id="detallesMonstruo">
    <img
        src={foundMonster.image}
        alt=""
        width="300px"
        height="300px"
        style={{ textAlign: "center", margin: "5px" }}
    />
    <h1 style={{ textAlign: "center", margin: "5px" }}>{foundMonster.name}</h1>
    <p>{foundMonster.description}</p>
    <div id="btnsDetails">
    {/*<Link to={`/edit-monster/${parametrosDinamicos.monsterId}`}><button>Editar</button></Link>*/}
    <Link to="/"><button>Back</button></Link>
    </div>
    
    </div>
  )
}

export default MonsterDetails