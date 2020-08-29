import React, { Component } from 'react'
import Pokedex from './Pokedex';

export default class Pokegame extends Component {
    static defaultProps= {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };
    render (){
        let player1 = [];
        let player2 = [...this.props.pokemon];
        while (player1.length < player2.length){
            let randInd = Math.floor(Math.random() * player2.length);
            let randPokemon = player2.splice(randInd, 1)[0];
            player1.push(randPokemon);
        }
        let exp1 = player1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = player2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return (
            <div>
                <Pokedex player={1} pokemon={player1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex player={2} pokemon={player2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    }
}