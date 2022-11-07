import pokemon_model from './model.js';
import pokemon_view from './view.js';

export default class controller{
    constructor(){
        // this will create a div element with the id of app and append it to the dom
        
        this.app_element = document.createElement('div');
        this.app_element.id = 'app';
        document.body.appendChild(this.app_element);
        this.app_element = document.getElementById('app');
      

        this.Model = new pokemon_model();
        this.View = new pokemon_view();
        this.View.render_pokemon(this.Model.get_pokemon());
    }
}
//todo show all the pokemon