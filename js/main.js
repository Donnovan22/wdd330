const ol = document.querySelector(".list");

const links = [
  {
    label: "Week01",
    url: "week01/story_editor.html"
  },
  /*{
    label: "Week02 / Team Activity",
    url: "week02/teamActivity/index.html"
  },*/
  {
    label: "Week02 / Quiz Ninja",
    url: "week02/quizNinja/index.html"
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