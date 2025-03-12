import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CategoryList() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/categories`)
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
      {/*<h1 className="pageTitle">CATEGORIES</h1>*/}
      {allCategories.map((eachCategory) => {
        return (
          <Link key={eachCategory.id} to={`/monsters/category/${eachCategory.id}`}>
            <div id="eachCategoryList">
              <h2>{eachCategory.title.toUpperCase()}</h2></div>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryList;
