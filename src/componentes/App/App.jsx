import { useState } from 'react'
import './App.css'
import ListaPokemon from '../ListaPokemon/ListaPokemon';


const App = () => {

  const [listaPokemon, setListaPokemon] = useState([]);

  const cargarPokemon = async () => {

    const limite = 807;
    const URL = `https://pokeapi.co/api/v2/pokemon/?limit=${limite}`
    /* en la documentacion mencionaba que al llamar a cualquier endpoint de la API sin un ID o 
    nombre de recurso, se obtendrá una lista paginada de los recursos disponibles para esa API 
    (una "página" de lista contendrá hasta 20 recursos) por ello podriamos agregar un parámetro de consulta "limit" 
    a la solicitud GET, por ejemplo, ?limit=60. Para este caso necesitabamos 807 pokemon
    */
    const respuesta = await fetch(URL);
    let datos = await respuesta.json();
    setListaPokemon(datos.results)
  }

  return (
    <>
      <button onClick={cargarPokemon}> Despliega la lista de pokemon </button>
      <ListaPokemon listaPokemon={listaPokemon} />
    </>
  )

}


export default App
