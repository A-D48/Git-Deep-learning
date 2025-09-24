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
