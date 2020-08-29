import React, { Component } from 'react';
import Pokecard from './Pokecard';



export default class Pokedex extends Component {
    render (){
        let title;
        if(this.props.isWinner){
            title =  <span className='winner' role='img' aria-labelledby='grind'>WINNER HOOOOOO 😁😁😁!!!!</span>;
        } else {
            title =  <span className='loser' role='img' aria-labelledby='cry'>LOSERRRR, I'M A LOSERRR 😢😢😢</span>;
        }
        return(
            <div className='Pokedex'>
                <h2>Player {this.props.player}</h2>
                <h4>Total Exp: {this.props.exp}</h4>
                {title}
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map(p => (
                        <Pokecard id={p.id} 
                        name={p.name} 
                        type={p.type} 
                        exp={p.base_experience} />
                    ))}
                </div>                
            </div>
        )
    }
}
