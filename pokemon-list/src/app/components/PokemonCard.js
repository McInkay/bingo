function PokemonCard({id, name}) {
    return (
        <>
            <img alt={`Sprite for ${name}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <br />
            {name} ({id})
        </>
    )
}

export default PokemonCard;