/*let toDoList = [
    {
        id: "1",
        text: "task1",
        bolean: false
    },
    {
        id: "2",
        text: "task2",
        bolean: false
    },
    {
        id: "3",
        text: "task3",
        bolean: false
    },

]*/




export default class ToDoModel {
    constructor(id, text, bolean=false) {
        this.id = id;
        this.text = text;
        this.bolean = bolean;
    }
    /*constructor(){}*/

    getId(){
        return this.id;
    }

    setid(id){
        this.id = id;
    }

    getText(){
        return this.text;
    }

    setText(text){
        this.text = text;
    }

    getBolean(){
        return this.bolean;
    }

    setBolean(bolean){
        this.bolean = bolean;
    }

   /* getToDoList(){
        return toDoList;
    }*/
}


