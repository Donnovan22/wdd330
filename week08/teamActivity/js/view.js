export default class pokemon_view{
    constructor(){

    }
    render_pokemon(pokemon){
        for(let i in pokemon){
            //console.log(pokemon[i].pokemon_species.name);
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon[i].pokemon_species.name}`).then((response) => response.json())
                .then((data) => {
                    this.render_card(data);
            });
        }
    }
    render_card(pokemon){
        console.log(pokemon);
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <section>
        <header>${pokemon.name}</header>
        <body>
        <img src="${pokemon.sprites.front_default}" alt=":(">
        </body>
        <footer>
        <ul>
        <li>ability: ${pokemon.abilities[0].ability.name}</li>
        </ul>
        </footer>
        </section>
        `;
        document.getElementById('app').appendChild(card);
    }
}
//todo create a render all pokemon view
