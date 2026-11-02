// Add new projects here after uploading a copy of the project-page template.
const projects = [
  {
    "title": "Password Juggernaut",
    "file": "password-juggernaut.html"
  },
  {
    "title": "Database Systems",
    "file": "database-systems.html"
  },
  {
    "title": "Habit Tracker",
    "file": "habit-tracker.html"
  },
  {
    "title": "Steganography Tool",
    "file": "steganography-tool.html"
  },
  {
    "title": "Web Technologies Portfolio",
    "file": "web-technologies.html"
  },
  {
    "title": "Unity Game Collection",
    "file": "unity-games.html"
  }
];
const list = document.getElementById('project-list');
const currentFile = location.pathname.split('/').pop() || 'index.html';
projects.forEach(function (project) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = './' + project.file;
  link.textContent = project.title;
  if (currentFile === project.file) link.setAttribute('aria-current', 'page');
  item.appendChild(link);
  list.appendChild(item);
});
