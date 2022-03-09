import PokemonCard from './PokemonCard';

function OutputList({selected, unselectPokemon}) {

    return (
        <ul className='pokemon-list'>
            {selected
                .map((pokemon, i) => (
                    <div key={pokemon.id} onClick={() => unselectPokemon(i)}>
                        <PokemonCard id={pokemon.id} name={pokemon.name} ></PokemonCard>
                    </div>
                )
            )}
        </ul>
    );
}

export default OutputList;
