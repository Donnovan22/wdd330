import ToDoModel from "./toDoModel.js";
import ToDoView from "./toDoView.js";

export default class ToDoController {
    constructor(parentElement){
        this.parentElement = document.getElementById(parentElement);
        this.toDoView = new ToDoView();    
        this.toDoList = [];
    }
    
    showToDoList(){
        this.readFromLocalStorage(); 
        this.saveToDoModel();
        //localStorage.clear();
    }

    showFooter(){
        // pending..
    }

    writeToLocalStorage(toDoList) {
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        this.toDoView.renderToDoList(toDoList, this.parentElement);
    }

    readFromLocalStorage(){
        const array = localStorage.getItem("toDoList");
        if (array){
            this.toDoList = JSON.parse(array);
            this.toDoView.renderToDoList(this.toDoList, this.parentElement);
        }
    }

    addToDoModel(text){
        let toDoModel = new ToDoModel(Date.now(), text, false);
        this.toDoList.push(toDoModel);
        this.writeToLocalStorage(this.toDoList);
        console.log(toDoModel);
    }

    saveToDoModel(){
        const button = document.querySelector("#addButton");
        button.addEventListener("click", event => {
            event.preventDefault();
            const userInput = document.querySelector("#userInput");
            const text = userInput.value.trim();
            if(text !== ""){
                this.addToDoModel(text);
                userInput.value = "";    
                userInput.focus();        
            }});
    }

    completeToDoElement(){
        // pending..
    }

    removeToDoElement(){
        // pending..
    }

    filterToDoList(){
        // pending..
    }

}