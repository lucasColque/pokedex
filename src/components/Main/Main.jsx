
import Card from '../Card/Card';
import './main.css';

const Main = ({listaPokemon}) => {
    const pokemons = listaPokemon;


    
    return (
        <main>
            <div id='todos'>
                <div className='pokemon-todos' id='listaPokemon'>
                    {
                        pokemons.map(pokemon =>(

                        <Card key={pokemon.name} {...pokemon}/>
                        )) 
                    }
                
                </div>
            </div>
        </main>
    )
}

export default Main