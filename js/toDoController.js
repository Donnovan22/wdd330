import ToDoModel from "./toDoModel.js";
import ToDoView from "./toDoView.js";

export default class ToDoController {
    constructor(parentId){
       this.parentElement = document.getElementById(parentId);
       
       this.toDoView = new ToDoView(parentId);
       
    }
    
    createToDoList(){
        let toDoList = [];

        let toDoModel = new ToDoModel("1", "task1", false);
        let toDoModel2 = new ToDoModel("2", "task2", false);
        let toDoModel3 = new ToDoModel("3", "task3", false);
        let toDoModel4 = new ToDoModel("4", "task4", false);

        toDoList.push(toDoModel, toDoModel2, toDoModel3, toDoModel4);

        return toDoList;
    }

    showToDoList(){
        this.toDoView.renderToDoList(this.createToDoList(), this.parentElement);
    }

    showFooter(){

    }

    addToDoModel(){

    }

    getToDoModel(){

    }

    saveToDoModel(){

    }

    completeToDoElement(){

    }

    removeToDoElement(){

    }

    filterToDoList(){

    }

}