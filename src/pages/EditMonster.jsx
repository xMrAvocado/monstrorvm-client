import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
function EditMonster() {

    const parametrosDinamicos = useParams();
    //console.log(parametrosDinamicos.monsterId);

  const navigate = useNavigate();

    const [editedMonster, setEditedMonster] = useState({});
    
      const handleAll = (event) => {
        let name = event.target.name;
        let clone = { ...editedMonster };
        clone[name] = event.target.value;
        setEditedMonster(clone);
      };
    
      useEffect(()=>{

        axios.get(`${import.meta.env.VITE_SERVER_URL}/monsters/${parametrosDinamicos.monsterId}`)
        .then((response)=>{
          //console.log(response)
          setEditedMonster(response.data);
        })
        .catch((error)=>{
          //console.log(error)
        })
    
      },[])
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/monsters/${parametrosDinamicos.monsterId}`, {
            name: editedMonster.name,
            categoryId: editedMonster.categoryId,
            description: editedMonster.description,
            image: editedMonster.image,
          });
          //console.log("todo bien, tarea creada");
          //console.log(response)
          setEditedMonster(response.data);
          setEditedMonster({
            name: "",
            categoryId: "",
            description: "",
            image: "",
          });
          navigate(`/`)
        } catch (error) {
          console.log(error);
        }
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="formCSS">
              <label>Name:&nbsp;</label>
              <input
                value={editedMonster.name}
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleAll}
              />
              <label>Id Category:&nbsp;</label>
              <input
                value={editedMonster.categoryId}
                name="categoryId"
                type="text"
                placeholder="Category Id"
                onChange={handleAll}
              />
              <label>Description:&nbsp;</label>
              <input
                className="textArea"
                value={editedMonster.description}
                name="description"
                type="textarea"
                placeholder="Description"
                onChange={handleAll}
              />
              <label>Image:&nbsp;</label>
              <input
                value={editedMonster.image}
                name="image"
                type="url"
                placeholder="Image"
                onChange={handleAll}
              />
              <div className="btnsForms">
                <button type="submit">Update Monster</button>
                <Link to="/">
                  <button>Back</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      );
}

export default EditMonster