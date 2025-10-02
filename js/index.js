/*======= FOOTTER =========*/
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `© ${thisYear} Alireza Danesh | Los Angeles, CA`;
footer.appendChild(copyright);

/*======= SKILLS =========*/

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "After Effects",
];

const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

/*======= Message Form =========*/
const messageForm = document.forms["leave_message"];

function updateMessagesVisibility() {
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.hidden = true;
  } else {
    messageSection.hidden = false;
  }
}

updateMessagesVisibility();

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> ${usersMessage} </span>
  
  `;

  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";
  editButton.addEventListener("click", function () {
    const span = newMessage.querySelector("span");
    const currentText = span.textContent.replace(/^ -\s*/, "");
    const updated = prompt("Edit your message:", currentText);
    if (updated !== null) {
      span.textContent = ` - ${updated}`;
    }
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
    updateMessagesVisibility();
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  updateMessagesVisibility();

  messageForm.reset();
});
