import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MonsterList() {
    const [categoryMonsters, setCategoryMonsters] = useState([]);

    const parametrosDinamicos = useParams();
    console.log(parametrosDinamicos.categoryId);


    /*Todos los monstruos que cumplan la condicion de pertenecer a una categoría*/
    useEffect(() => {
      fetch(`http://localhost:5005/monsters?categoryId=${parametrosDinamicos.categoryId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setCategoryMonsters(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
      <div id="monsterListCSS">
  
          <h1>All $</h1>
  
        {categoryMonsters.map((eachMonster) => {
          return (
            <Link key={eachMonster.id} to={`/monsters/${eachMonster.id}`}>
              <div id="eachMonsterList">{eachMonster.name.toUpperCase()}</div>
            </Link>
          );
        })}
      </div>
    );
}

export default MonsterList