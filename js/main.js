import ToDoController from "./toDoController.js";

const ol = document.querySelector(".list");

const links = [
  {
    label: "Week01",
    url: "week01/story_editor.html"
  },
  {
    label: "Week02 / Team Activity",
    url: "week02/teamActivity/index.html"
  },
  {
    label: "Week02 / Quiz Ninja",
    url: "week02/quizNinja/index.html"
  },
  {
    label: "Week03 / Events",
    url: "week03/events/events.html"
  },
  {
    label: "Week03 / Quiz Ninja",
    url: "week03/quizNinja/index.html"
  },
  {
    label: "Week04 / Forms",
    url: "week04/forms/hero.html"
  },
  {
    label: "Week04 / Quiz Ninja",
    url: "week04/quizNinja/index.html"
  },
  {
    label: "Week04 / Team Activity",
    url: "week04/teamActivity/index.html"
  },
  {
    label: "Week05 / Quiz Ninja",
    url: "week05/quizNinja/index.html"
  },
  {
    label: "Week05 / Team Activity",
    url: "week05/teamActivity/index.html"
  },
  {
    label: "Week07 / Quiz Ninja",
    url: "week07/quizNinja/index.html"
  },
  {
    label: "Week08 / Readings",
    url: "week08/reading/index.html"
  },
  {
    label: "Week08 / Team Activity",
    url: "week08/teamActivity/index.html"
  },
  {
    label: "Week09 / Readings",
    url: "week09/reading/index.html"
  },
  {
    label: "Week09 / Team Activity",
    url: "week09/teamActivity/index-START.html"
  },
  {
    label: "Week09 / Block2 Challenge Proposals",
    url: "week09/proposal/index.html"
  }
]

function addElementToOl() {
  links.forEach(element => {
    const li = document.createElement("li");
    li.innerHTML = `<a target=_blank href="${element.url}">${element.label}</a>`;
    ol.append(li);
  });
};

console.log(links);
addElementToOl();

const toDoController = new ToDoController("todoList");
toDoController.showToDoList();