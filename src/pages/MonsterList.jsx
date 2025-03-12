import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function MonsterList() {
  const parametrosDinamicos = useParams();
  const navigate = useNavigate()

  const [categoryMonsters, setCategoryMonsters] = useState([]);
  const [category, setCategory] = useState([]);

  
  //console.log(parametrosDinamicos.categoryId);

  // const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectCategory = (event) => {
    console.log("seleccionando categoryId de: " + event.target.value)
    navigate(`/monsters/category/${event.target.value}`)
    /*if(event.target.value === ""){
      setSearchParams() // limpiar los querys
    }else{
      setSearchParams({ categoryId: event.target.value})
    }*/
  }

  const categoryId = parametrosDinamicos.categoryId

  /*Todos los monstruos que cumplan la condicion de pertenecer a una categoría*/
  useEffect(() => {

    const getData = async () =>{

      try {
        const response1 = await axios.get(`${import.meta.env.VITE_SERVER_URL}/monsters?categoryId=${categoryId}`);
        //console.log("HOLA",response)
        setCategoryMonsters(response1.data);

        const response2 = await axios.get(`${import.meta.env.VITE_SERVER_URL}/categories/${categoryId}`);
        //console.log("ADIOS",response)
        setCategory(response2.data);

      } catch (error) {
        console.log(error);
      }
      }
  
    getData();
  }, [categoryId]);
  
  if(category === null){
    return(
        <div>
            <h3>Buscando data del monstruo...</h3>
        </div>
        
    )
  }

  

  return (
    <div id="monsterByCategoryContainer">
      <select onChange={handleSelectCategory} value={categoryId} id="categorySelector">
        <option className="optionCategory" value="1234">Infected</option>
        <option className="optionCategory" value="2345">Marked</option>
        <option className="optionCategory" value="3456">Packs</option>
        <option className="optionCategory" value="4567">R. Target</option>
        <option className="optionCategory" value="5678">Target</option>
      </select>
      <div className="categoryDetails">
      <h1 className="pageTitle">{category.title}</h1>
      <h3>Threat Level: <span id="threatLevel">{category.threatLvl}</span></h3>
      <p>{category.description}</p>
      </div>
      <div id="monsterListCSS">
        {categoryMonsters.filter((eachMonster)=>{
          if (eachMonster.categoryId === categoryId) {
            return true
          }else{
            return false
          }
        }).map((eachMonster) => {
          return (
            <Link key={eachMonster.id} to={`/monsters/${eachMonster.id}`}>
              <div id="eachMonsterList"><h2>{eachMonster.name} ► </h2></div>
            </Link>
          );
        })}
      </div>
      <Link to="/"><button>Back</button></Link>
    </div>
  );
}

export default MonsterList;
