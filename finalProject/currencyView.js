export default class CurrencyView {
    constructor(){

    }

    mainBuild(currencyList, keys){
        this.buildForm(keys);
        this.buildListOfCurrencies(currencyList);
    }

    buildForm(keys){
        let select = this.buildDropDownList(keys);
        const div = document.getElementById("converter-interface");
        div.innerHTML =`
        <form class='form-container' action='#'>
        <label>Amount</label>
        <input type='text' id='amountInput' required>
        <label>From</label>
        <select id='from'>
        ${select.innerHTML}
        </select>
        <label>To</label>
        <select id='to'>
        ${select.innerHTML}
        </select>
        <input type='submit' value='Calculate' id='calculate-button'>
        <input type='text' value='0.00' id='result-input'>
        </form>
        `;
    }

    buildDropDownList(keys){
        let select = document.createElement("select");

        keys.forEach(element => {
            let option = document.createElement("option");
            option.value = element;
            option.text = element;
            select.appendChild(option);
        });

        return select;
    }

    buildListOfCurrencies(currencyList){
        let div = document.getElementById("currency-list");
        let table = document.createElement("table");
        table.setAttribute("class", "table-currency");
        let tr = document.createElement("tr");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");

        th1.textContent = "SYMBOL";
        th2.textContent = "COUNTRY";

        table.append(tr);
        tr.append(th1);
        tr.append(th2);

        for (const [key, value] of Object.entries(currencyList)) {
            let tr2 = document.createElement("tr");
            let td = document.createElement("td");
            let td2 = document.createElement("td");

            td.textContent = key;
            td2.textContent = value;

            tr2.append(td);
            tr2.append(td2);
            table.append(tr2);
           
        }
        div.append(table);
    }

}