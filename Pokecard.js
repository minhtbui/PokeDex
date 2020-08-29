import React, {Component} from 'react';

const poke_api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
export default class Pokecard extends Component {
    render (){
        const id = this.props.id.toString().padStart(3, '0');
        let imgSrc = `${poke_api}${id}.png`
        return (
            <div className='Pokecard'>
                <h2 className='Pokecard-title'> {this.props.name} </h2>
                <div className='Pokecard-image'> 
                    <img src={imgSrc} alt={this.props.name}/>
                </div>    
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>EXP: {this.props.exp}</div>
            </div>
        )
    }
}