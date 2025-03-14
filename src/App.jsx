import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import MonsterDetails from "./pages/MonsterDetails";
import MonsterList from "./pages/MonsterList";
import AddMonster from "./pages/AddMonster";
import { useEffect,useState } from "react";
import EditMonster from "./pages/EditMonster";
import Error from "./pages/Error";

function App() {
  const [listMonsters, setListMonsters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/monsters")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListMonsters(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/monsters/:monsterId" element={<MonsterDetails />}></Route>
        <Route
          path="/monsters/category/:categoryId"
          element={<MonsterList />}
        ></Route>
        <Route
          path="/monsters/edit/:monsterId"
          element={<EditMonster />}
        ></Route>
        <Route
          path="/add-monster"
          element={
            <AddMonster
              listMonsters={listMonsters}
              setListMonsters={setListMonsters}
            />
          }
        ></Route>

        <Route path="/error" element={<Error />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
