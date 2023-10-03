import { useEffect, useState } from 'react';
import './card.css';

const Card = ({url}) => {
    const [pokemon, setPokemon] = useState({});
    const [pokemonImage, setPokemonImage] = useState("");

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPokemon(data)
                setPokemonImage(data.sprites.other['official-artwork'].front_default)

            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='pokemon'>
            <p className="pokemon-id-back">
                {pokemon.id < 100 ? pokemon.id < 10 ? `#00${pokemon.id}` : `#0${pokemon.id}` : `#${pokemon.id}`}
            </p>
            <div className="pokemon-imagen">
                <img src={pokemonImage} alt={pokemon.name} />
            </div>
            <div className='pokemon-info'>
                <div className="nombre-contenedor">
                    <p className='pokemon-id'>
                    {pokemon.id < 100 ? pokemon.id < 10 ? `#00${pokemon.id}` : `#0${pokemon.id}` : pokemon.id}
                    </p>
                    <h2 className='pokemon-nombre'>{pokemon.name}</h2>
                </div>
                <div className='pokemon-tipos'>
                    {
                        pokemon.types ?
                            pokemon.types.map(type => {
                                return (
                                    <p className={`tipo ${type.type.name}`} key={type.type.name}>
                                        {type.type.name}
                                    </p>
                                );
                            }) :
                            <p>cargando...</p>
                    }

                </div>
                <div className='pokemon-stats'>
                    <p className="stat">
                        {
                            `${pokemon.height} M`
                        }
                    </p>
                    <p className="stat">{
                            `${pokemon.weight} kg`
                        }</p>
                </div>
            </div>
        </div>
    )
}

export default Card