import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function HomePage() {
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
  return (
    <div id="homepageCSS">

        <h1>All $</h1>

      {allMonsters.map((eachMonster) => {
        return (
          <Link key={eachMonster.id} to={`/monsters/${eachMonster.id}`}>
            <div id="eachMonsterList">{eachMonster.name.toUpperCase()}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
