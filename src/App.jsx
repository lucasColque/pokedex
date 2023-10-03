import { useEffect, useState } from 'react';
import './app.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [busqueda, setBusqueda] = useState("https://pokeapi.co/api/v2/pokemon")
  const [listaPokemon, setListaPokemon] = useState([]);

  useEffect(()=>{
      fetch(busqueda)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setListaPokemon(data.results);
        } else if (data.pokemon) {
          const filteredData = data.pokemon.map(({ pokemon: { name, url } }) => ({ name, url }));
          setListaPokemon(filteredData);
        } else {
          console.log("No se encontró la lista de Pokémon en la respuesta");
        }

      })
      .catch(err => console.log("Error al colocar hola", err))
  },[busqueda])
  const handleChangeBusqueda = (data) =>{
      setBusqueda(data)
      console.log(data);
  }

  return (
    <>
      <Header handleChangeBusqueda={handleChangeBusqueda}/>
      <Main listaPokemon={listaPokemon}/>
    </>
  )
}

export default App
