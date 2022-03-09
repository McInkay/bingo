import { useState } from 'react';

export const useSelected = () => {
    const [selected, setSelected] = useState([]);

    const selectPokemon = (pokemon) => {
        const id = pokemon.url.split('/').slice(-2)[0];
        if (selected.some((el) => el.id === id)) {
            // Ensure we don't add duplicates
            return;
        }
        const newSelected = [...selected, {...pokemon, id}];
        newSelected.sort((a, b) => a.id - b.id);
        setSelected(newSelected);
    };

    const unselectPokemon = (index) => {
        const newSelected = [...selected];
        newSelected.splice(index, 1);
        setSelected(newSelected);
    }

    const clear = () => {
        setSelected([]);
    }

    return [selected, selectPokemon, unselectPokemon, clear];
}