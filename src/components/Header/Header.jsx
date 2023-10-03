import './header.css';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';

const Header = ({ handleChangeBusqueda } = props) => {

    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => {
                const updatedTypes = data.results.slice(0, -2);
                setPokemonTypes(updatedTypes);
                setLoading(false)
            })
    }, [])

    return (
        <header>
            <nav className='nav'>
                <picture className='nav-picture'>
                    <img src={logo} alt="logo pokedex de la página" />
                </picture>
                <ul className='nav-list'>
                    {
                        loading ?
                            <p>Cargando...</p>
                            : (
                                <>
                                    <li className='nav-item'>
                                        <button
                                            className='btn btn-header'
                                            id='ver-todos'
                                            onClick={() => handleChangeBusqueda(`https://pokeapi.co/api/v2/pokemon`)}
                                        >
                                            Ver todos
                                        </button>
                                    </li>
                                    {pokemonTypes.map(type => (
                                        <li className='nav-item' key={type.name}>
                                            <button 
                                            className={`btn btn-header ${type.name}`} 
                                            id={type.name}
                                            onClick={()=>handleChangeBusqueda(`https://pokeapi.co/api/v2/type/${type.name}`)}>
                                                {type.name}
                                            </button>
                                        </li>
                                    ))}
                                </>
                            )
                    }
                </ul>
            </nav>

        </header>
    )
}

export default Header