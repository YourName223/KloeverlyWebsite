const jsonString =
  '[{"title":"Æbler","description":"Jytte samlede æbler op","points":10},{"title":"Mange æbler","description":"Jytte samle mange æbler op","points":20},{"title":"Rigtig mange æbler","description":"Jytte samle rigtig mange æbler op","points":30}]';
const task = JSON.parse(jsonString);

const listItems = document.querySelectorAll(".OpenTasks li");

for (let i = 0; i < listItems.length; i++) {
  const li = listItems[i];
  const Task = task[i];
  
  const titleElement = li.querySelector(".title");
  const descriptionElement = li.querySelector(".description");

  titleElement.textContent = Task.title;
  descriptionElement.textContent = Task.description;
}