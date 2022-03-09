import { useState, useEffect } from 'react';
import { getAllPokemon } from '../api/getPokemon';
import PokemonCard from './PokemonCard';

function PokemonList({filter, selectPokemon, getGetTop}) {
    const [list, setList] = useState([]);
    useEffect(() => {
        getAllPokemon().then((res) => setList(res.results))
    }, [setList]);

    const filteredList = list.filter((pokemon) => pokemon.name.toLowerCase().includes(filter.name.toLowerCase()));
    getGetTop(() => filteredList[0]);

    return (
        <ul className='pokemon-list'>
            {filteredList
                .map((pokemon) => (
                    <div key={pokemon.name} onClick={() => selectPokemon(pokemon)}>
                        <PokemonCard id={pokemon.url.split('/').slice(-2)[0]} name={pokemon.name} ></PokemonCard>
                    </div>
                )
            )}
        </ul>
    );
}

export default PokemonList;
