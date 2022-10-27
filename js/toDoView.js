export default class ToDoView {
    constructor(){

    }

    renderToDoList(toDoList, parentElement){
        parentElement.innerHTML = "";
        toDoList.forEach(toDoModel => {   
            const checked = toDoModel.bolean ? 'checked': null;       
            parentElement.appendChild(this.renderOneToDoElement(toDoModel, checked));
        });
    }

    renderOneToDoElement(toDoModel, checked){
        const toDoElement = document.createElement("li");
        toDoElement.setAttribute("class", "toDoElement");
        toDoElement.setAttribute("data-key", toDoModel.id);

        if (toDoModel.bolean === true) {
            toDoElement.classList.add("checked");
        }

        toDoElement.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        <span>${toDoModel.text}</span>
        <button class="deleteButton">X</button>
        `;

        return toDoElement;
    }
    
    renderFooter(parentElement){
        const footer = document.createElement("div");
        footer.setAttribute("class", "footer-div");
        footer.innerHTML = `
        <span id="counter">- tasks left</span>
        <button id="all">All</button>
        <button id="active">Active</button>
        <button id="completed">Completed</button>
        `;

        parentElement.appendChild(footer);
    }

  }