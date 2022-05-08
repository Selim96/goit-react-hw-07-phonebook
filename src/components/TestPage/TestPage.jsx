import { useState } from "react";
import { useGetPokemonByNameQuery } from "redux/contacts/pokemon";
import { Oval } from 'react-loader-spinner';

export default function Testpage() {
    const [pokemonName, setPokemonName] = useState("");
    const { data, isError, error, isFetching } = useGetPokemonByNameQuery(pokemonName, {
        skip: pokemonName === ''});

    const handleSubmit = e => {
        e.preventDefault();
        setPokemonName(e.currentTarget.elements.pokemonName.value);
    };

    return <>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type='text' name="pokemonName" />
            <button type="submit">Seatch</button>
        </form>
        {isFetching && <Oval
            height="20"
            width="20"
            color='rgb(14, 7, 105)'
            ariaLabel='loading'
        />}
        {isError && error.originalStatus === 404 && (<p>Такого покемона, с именем { pokemonName} нет!</p>)}
        {data && !isError && !isFetching && <h1>{ pokemonName}</h1>}
    </>;
}