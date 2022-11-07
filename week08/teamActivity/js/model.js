export default class pokemon_model{
    constructor(){
        // when this model is loaded all pokemon are loaded into the local and .date property 
        // then ETL is used to changed the data from there with diffrent methods
        // this is done to avoid making unessasary https requests
        this.apiurl ='https://pokeapi.co/api/v2/pokedex/national';
        this.data = {};
        this.load_data();
        console.log(this.data[100]);
    }
    load_data(){
        //load data
        this.data = JSON.parse(localStorage.getItem('pokemon_data'));
         //if none
        if(this.data == null){
            this.data = this.extract_all_pokemon_from_api();
        }

    }
    extract_all_pokemon_from_api(){
        //returns all thie pokemon form the apiurl and set pokemon_data in localstorage
        fetch(this.apiurl)
        .then((response) => response.json())
        .then((data) => {
           var data = JSON.stringify(data.pokemon_entries);
           localStorage.setItem('pokemon_data',data);
        });
    }
    get_pokemon(){
        return this.data;
    }
    get_pokemon_like_name(name){
        //todo returns an array of pokemon that is similar to a string of char 
    }
    get_pokemon_by_id(id){
        // returns a pokemon by its id
        let pkid = id+1;
        return this.data[pkid];
    }
}