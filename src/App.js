import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Form from "./components/Form";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "ef6d802d9c90.e01d0b9ee01b0f0cc7fd";

function App() {
  let [characters, setCharacters] = useState([]);
  const location = useLocation();
  const userLocation = location.pathname;

  function onSearch(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };

  const EMAIL = "camilodiaza37@gmail.com";
  const PASSWORD = "camilo22";
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {userLocation !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
