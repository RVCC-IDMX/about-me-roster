import './style.css';

import classRoster01 from './caruso-01.json';
import classRoster02 from './caruso-02.json';
import classRoster03 from './sichel_roster.json';

const rosters = [
  {
    name: 'roster01',
    rosterArr: classRoster01,
  },
  {
    name: 'roster02',
    rosterArr: classRoster02,
  },
  {
    name: 'roster03',
    rosterArr: classRoster03,
  },
];

rosters.forEach((roster) => {
  const ul = document.querySelector(`#${roster.name}`);
  //
  roster.rosterArr.forEach((student) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    //
    if (student.github_id) {
      const url = `https://about-me-${student.github_username}.netlify.app`;
      const repo = `https://github.com/rvcc-idmx/about-me-${student.github_username}`;
      //
      li.innerHTML = `
          <div class="links">
            <p class="repo"><a target="_blank" href="${repo}">${student.identifier}</a></p>
            <p class="site"><a target="_blank" href="${url}">${url}</a></p>
         </div>
    `;
    } else {
      li.innerHTML = `${student.identifier}`;
    }
  });
});
