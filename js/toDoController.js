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
        this.addToDoElement();
        this.toDoListInteraction();
    }

    showFooter(){
        this.toDoView.renderFooter(this.parentElement);
    }

    readFromLocalStorage(){
        const array = localStorage.getItem("toDoList");
        if (array){
            this.toDoList = JSON.parse(array);
            this.toDoView.renderToDoList(this.toDoList, this.parentElement);
            this.showFooter();
        }
    }

    writeToLocalStorage(toDoList) {
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        this.toDoView.renderToDoList(toDoList, this.parentElement);
        this.showFooter();
    }

    saveToDoModel(text){
        let toDoModel = new ToDoModel(Date.now(), text, false);
        this.toDoList.push(toDoModel);
        this.writeToLocalStorage(this.toDoList);
        console.log(toDoModel);
    }

    addToDoElement(){
        const button = document.querySelector("#addButton");
        button.addEventListener("click", event => {
            event.preventDefault();
            const userInput = document.querySelector("#userInput");
            const text = userInput.value.trim();
            if(text !== ""){
                this.saveToDoModel(text);
                userInput.value = "";    
                userInput.focus();        
            }});
    }

    toDoListInteraction(){
        this.parentElement.addEventListener("click", event =>{
            if (event.target.type === "checkbox") {this.toggle(event.target.parentElement.getAttribute("data-key"));}
            if (event.target.classList.contains("deleteButton")) {this.removeToDoElement(event.target.parentElement.getAttribute("data-key"));}
        });
    }

    filterActiveTasks(){
        // pending..
    }

    filterCompletedTasks(){
        // pending..
    }

    filterAllToDoElements(){
        // pending..
    }

    removeToDoElement(id){
        this.toDoList = this.toDoList.filter(function(toDoModel) {
            return toDoModel.id != id;
          });
        this.writeToLocalStorage(this.toDoList);
    }

    toggle(id) {
        this.toDoList.forEach(function(toDoModel) {
            if (toDoModel.id == id) {
              toDoModel.bolean = !toDoModel.bolean;
            }
          });
        this.writeToLocalStorage(this.toDoList);
    }
}