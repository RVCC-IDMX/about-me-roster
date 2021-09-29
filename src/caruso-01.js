import './style.css';

import classRoster from './caruso-01.json';

const roster = document.querySelector('#roster');

classRoster.forEach((student) => {
  const li = document.createElement('li');
  roster.appendChild(li);
  if (student.github_id) {
    const url = `https://about-me-${student.github_username}.netlify.app`;
    //
    li.innerHTML = `
    <div class="links">
    <p class="repo"><a target="_blank" href="https://github.com/rvcc-idmx/about-me-${student.github_username}">${student.identifier}</a></p>

    <p class="site"><a target="_blank" href="${url}">${url}</a></p>

    </div>
    `;
  } else {
    li.innerHTML = `${student.identifier}`;
  }
});
