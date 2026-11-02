// Add new projects here after uploading a copy of the project-page template.
const projects = [
  {
    "title": "Test Project 1",
    "file": "test-project-1.html"
  },
  {
    "title": "Test Project 2",
    "file": "test-project-2.html"
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
