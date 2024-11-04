'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Pokemon from '../components/Pokemon';

export default function ListPage() {
    const [list, setList] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(10);
    const [pokemonDetails, setPokemonDetails] = useState([]);

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const data = await response.json();
            setList(data.results);

            // Fetch detailed Pokémon data
            const details = await Promise.all(data.results.map(async (pokemon) => {
                try {
                    const response = await fetch(pokemon.url);
                    const data = await response.json();
                    return {
                        name: data.name,
                        image: data.sprites.front_default, // Get the Pokémon image
                    };
                } catch (error) {
                    console.error("Failed to fetch Pokémon details:", error);
                    return null; // Return null if the fetch fails
                }
            }));

            // Filter out any null results
            setPokemonDetails(details.filter(Boolean));
        } catch (error) {
            console.error("Failed to fetch Pokémon:", error);
        }
    };

    const addOffSet = () => {
        setOffset((prevOffset) => prevOffset + limit);
    };

    const subtractOffSet = () => {
        if (offset <= 0) {
            return;
        }
        setOffset((prevOffset) => prevOffset - limit);
    };

    useEffect(() => {
        fetchPokemon();
    }, [offset]);

    return (
        <div className='pl-5'>
            <h1>Pokemon</h1>
            <p>Here is a list of Pokemon</p>
            <div className='flex flex-col'>
                <div className='flex flex-row gap-2'>
                    <button className="border-2 border-white" onClick={subtractOffSet}>Previous</button>
                    <button className="border-2 border-white" onClick={addOffSet}>Next</button>
                </div>
            </div>
            <ul className="flex flex-col gap-4 mt-10">
                {pokemonDetails.map((pokemon) => (
                    <li key={pokemon.name} className="flex items-center gap-4">
                        <Pokemon name={pokemon.name} image={pokemon.image} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
