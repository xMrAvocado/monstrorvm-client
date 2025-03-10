import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CategoryList() {
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

      {allCategories.map((eachCategory) => {
        return (
          <Link key={eachCategory.id} to={`/monsters/category/${eachCategory.id}`}>
            <div id="eachCategoryList">{eachCategory.title.toUpperCase()}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryList;
