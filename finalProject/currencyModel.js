export default class CurrencyModel {
    constructor(){
        this.APIKEY = "ZuOGtWVFj4V1RqHCxaatALSucEYr4tIS";
        this.data = [];
        this.keys = [];
        this.result = [];
        this.loadData();
        
    }

    loadData(){
        this.data = JSON.parse(localStorage.getItem('currency_list'));
        this.requestListOfCurrencies();
        this.keys = Object.keys(this.data.currencies);
    }

    requestListOfCurrencies(){
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers:  { apikey: this.APIKEY }
          };

            fetch("https://api.apilayer.com/currency_data/list", requestOptions)
            .then(response => response.json())
            .then((result) => {
                let data = JSON.stringify(result);
                localStorage.setItem('currency_list',data);
             })
            .catch(error => console.log('error', error));
    }

    computeConversion(from, to, amount){
        let requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: { apikey: this.APIKEY }
          };
      
          fetch(
            `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
                //let data = JSON.stringify(result);
                localStorage.setItem("list_of_results", result);
                this.readFormLocalStorage();
                
            })
            .catch((error) => console.log("error", error));
    }

    getListOfCurrencies(){
        return this.data;
    }

    getListOfKeys(){
        return this.keys;
    }

    readFormLocalStorage(){
        console.log(JSON.parse(localStorage.getItem("list_of_results")));
        this.result = JSON.parse(localStorage.getItem("list_of_results"));
        //console.log(this.result);
        this.manageResult();
    }

    manageResult(){
        let resultInput = document.getElementById("result-input");
        resultInput.value = this.result.result;
    }
}