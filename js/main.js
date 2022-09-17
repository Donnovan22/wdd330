const ol = document.querySelector(".list");

const links = [
  {
    label: "Week01",
    url: "week01/story_editor.html"
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