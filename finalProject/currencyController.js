import CurrencyModel from "./currencyModel.js";
import CurrenciView from "./currencyView.js";

export default class CurrencyController {
    constructor(){
        this.currencyModel = new CurrencyModel();
        this.currencyView = new CurrenciView();
        this.keys =  this.currencyModel.getListOfKeys();
        this.currencyList = this.currencyModel.getListOfCurrencies();
    }

    displayInterface(){
       
        this.currencyView.mainBuild(this.currencyList.currencies, this.keys);
        this.handleConversion();
        
    }

    handleConversion(){
        let calculateButton = document.getElementById("calculate-button");
        let amountInput = document.getElementById("amountInput");
        let fromInput = document.getElementById("from");
        let toInput = document.getElementById("to");

        calculateButton.addEventListener("click", event => {
            event.preventDefault();
            console.log(amountInput.value);
            console.log(fromInput.value);
            console.log(toInput.value);
            this.currencyModel.computeConversion(fromInput.value, toInput.value, parseFloat(amountInput.value));
        });

        
    }

}