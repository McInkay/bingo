function PokemonCard({id, name}) {
    return (
        <>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <br />
            {name} ({id})
        </>
    )
}

export default PokemonCard;