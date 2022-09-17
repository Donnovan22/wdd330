const ol = document.querySelector(".list");

const links = [
  {
    label: "Week01",
    url: "week01/index.html"
  },
  {
    label: "Week02",
    url: "week02/index.html"
  },
  {
    label: "Week03",
    url: "week03/index.html"
  },
  {
    label: "Week04",
    url: "week04/index.html"
  },
  {
    label: "Week05",
    url: "week05/index.html"
  }
]

function addElementToOl() {
  links.forEach(element => {
    const li = document.createElement("li");
    li.innerHTML = `<a targer=_blank href="${element.url}">${element.label}</a>`;
    ol.append(li);
  });
};

console.log(links);
addElementToOl();