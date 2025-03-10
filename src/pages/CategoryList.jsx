import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function HomePage() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setAllCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div id="categoriesCSS">

        <h1>All $</h1>

      {allCategories.map((eachCategory) => {
        return (
          <Link key={eachCategory.id} to={`/categories/${eachCategory.id}`}>
            <div id="eachCategoryList">{eachCategory.title.toUpperCase()}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
