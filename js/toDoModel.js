export default class ToDoModel {
    constructor(id, text, bolean=false) {
        this.id = id;
        this.text = text;
        this.bolean = bolean;
    }

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
}


