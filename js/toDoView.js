export default class ToDoView {
    constructor(){

    }

    renderToDoList(toDoList, listElement){
        toDoList.forEach(toDoModel => {
            listElement.appendChild(this.renderOneToDoElement(toDoModel));
        });
    }

    renderOneToDoElement(toDoModel){
        const toDoElement = document.createElement("li");
        toDoElement.innerHTML = `
        <input type="checkbox" id="${toDoModel.id}">
        <span>${toDoModel.text}</span>
        <button id="deleteToDoElement">Delete</button>
        `;
        return toDoElement;
    }
}