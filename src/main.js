import 'normalize.css';
import './assets/style.scss';

import isLink from './utils/isLink';

import data from './data.json';
// TODO: core-skills tag 功能添加
const setExperiences = function(experiences) {
  let body = experiences.reduce((prev, item) => {
    return prev + `
      <h4>${ item.position } @ ${ item.company }</h4>
      <div class="experiences__time">${ item.time }</div>
      <div class="experiences__description">${ item.description }</div>
    `;
  }, '');

  return body ? `
    <div class="intro">
      <h3>工作经历</h3>
      <div class="intro__detail">
        ${ body }
      </div>
    </div>
  ` : '';
};

const setProjects = function(projects) {
  let body = projects.reduce((prev, item) => {
    return prev + `
      <h4>${ item.title }</h4>
      <div class="projects__link">${ item.link }</div>
      <div class="projects__description">${ item.description }</div>
    `;
  }, '');

  return body ? `
    <div class="intro">
      <h3>项目列表</h3>
      <div class="intro__detail">
        ${ body }
      </div>
    </div>
  ` : '';
};

const setContact = function(contact) {
  let body = Object.keys(contact).reduce((prev, key) => {
    return isLink(contact[key])
      ? prev + `<li>${ key }: <a href="${ contact[key] }" target="blank">${ contact[key] }</a></li>`
      : prev + `<li>${ key }: ${ contact[key] } </li>`;
  }, '');

  return body ? `
    <div class="intro">
      <h3>联系方式</h3>
      <div class="intro__detail">
        ${ body }
      </div>
    </div>
  ` : '';
};

const setOptions = function(contact) {
  return Object.keys(contact).reduce((prev, key) => {
    return isLink(contact[key])
      ? prev + `<li>${ key }: <a href="${ contact[key] }" target="blank">${ contact[key] }</a></li>`
      : prev + `<li>${ key }: ${ contact[key] } </li>`;
  }, '');
};

const setBasic = function(basic) {
  let body = Object.keys(basic).reduce((prev, key) => {
    switch(key) {
      case 'education':
        prev += setEducation(basic[key]);
        break;
      case 'languages':
        prev += setLanguage(basic[key]);
        break;
      case "gender":
        prev += `<li>性别: ${ basic[key] }</li>`;
        break;
      case 'options':
        prev += setOptions(basic[key]);
        break;
    }

    return prev;
  }, '');

  return body ? `
    <div class="intro">
      <h3>基本信息</h3>
      <div class="intro__detail">
        ${ body }
      </div>
    </div>
  ` : '';
};

const setEducation = function(education) {
  return education.reduce((prev, item) => {
    return prev + `
      <li>${ item.degree }: ${ item.school } - ${ item.major }</li>
    `;
  }, '');
};

const setLanguage = function(languages) {
  return Object.keys(languages).reduce((prev, key) => {
    return prev + `<li>${ key }: ${ languages[key] }</li>`;
  }, '');
};

const setSkills = function(skills) {
  let body = Object.keys(skills).reduce((prev, key) => {
    return prev + `<li>${ key }: ${ skills[key] }</li>`;
  }, '');

  return body ? `
    <div class="intro">
      <h3>技能</h3>
      <div class="intro__detail">
        ${ body }
      </div>
    </div>
  `: '';
};

const setActivities = function(activities) {
  let body = activities.reduce((prev, activity) => {
    return prev + `<li>${ activity }</li>`;
  }, '');

  return body ? `
    <div class="intro">
      <h3>活动经历</h3>
      <div class="intro__detail">
        ${ body }
      </div>
    </div>
  ` : '';
}

document.querySelector('.wrapper').innerHTML = `
  <div class="container">
    <header>
      <h1>${ data.name }</h1>
      <span>${ data.job }</span>
      <span>${ data.city }</span>
    </header>
    ${ setExperiences(data.experiences) }
    ${ setProjects(data.projects) }
  </div>
  <div class="sidebar">
    ${ setContact(data.contact) }
    ${ setBasic(data.basic) }
    ${ setSkills(data.skills) }
    ${ setActivities(data.activities) }
  </div>
`;