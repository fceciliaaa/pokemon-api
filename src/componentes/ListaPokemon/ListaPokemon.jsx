
const ListaPokemon = ({ listaPokemon }) => {
  return (

    <>
      <ol>
        {listaPokemon.map((pokemon, index) => {
          return (
            <li key={index} >
              {pokemon.name}
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default ListaPokemon;