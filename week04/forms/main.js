/* Search.html */
const form = document.forms[0];

//const form2 = document.getElementsByTagname('form')[0];

const form3 = document.forms.search;

//const [input, button] = form.elements;

const input1 = form.searchInput;

const input2 = form.searchInput;

const input4 = form['searchInput'];



const input = form.elements.searchInput;

/*input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);*/

form.addEventListener('submit', search, false);

function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}

input.value = 'Search Here';

input.addEventListener('focus', function () {
  if (input.value === 'Search Here') {
    input.value = ''
  }
}, false);

input.addEventListener('blur', function () {
  if (input.value === '') {
    input.value = 'Search Here';
  }
}, false);

