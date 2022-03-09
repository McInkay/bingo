export const getAllPokemon = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=898')
        .then((res) => res.json());
}
