import filterCSV from './filter-csv.js';
import './style.css';

import rawRoster01 from './data/caruso-01.csv';
import rawRoster02 from './data/caruso-02.csv';
import rawRoster03 from './data/sichel.csv';

const filterList = ['Cynthia Teeters', 'Steven Caruso', 'Lynn Sichel', 'Test Student', 'identifier'];

const classRoster01 = filterCSV(rawRoster01, filterList);
const classRoster02 = filterCSV(rawRoster02, filterList);
const classRoster03 = filterCSV(rawRoster03, filterList);

const rosters = [
  {
    htmlId: 'roster01',
    rosterArr: classRoster01,
  },
  {
    htmlId: 'roster02',
    rosterArr: classRoster02,
  },
  {
    htmlId: 'roster03',
    rosterArr: classRoster03,
  },
];

rosters.forEach((roster) => {
  const ul = document.querySelector(`#${roster.htmlId}`);
  //

  roster.rosterArr.forEach((student) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    //
    if (student[1]) {
      const repo = `https://github.com/rvcc-idmx/about-me-${student[1]}`;
      const url = `https://about-me-${student[1]}.netlify.app`;
      //
      li.innerHTML = `
          <div class="links">
            <p class="repo"><a target="_blank" href="${repo}">${student[0]}</a></p>
            <p class="site"><a target="_blank" href="${url}">${url}</a></p>
         </div>
    `;
    } else {
      li.innerHTML = `${student[0]}`;
    }
  });
});
