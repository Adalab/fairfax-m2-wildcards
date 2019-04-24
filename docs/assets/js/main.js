'use strict';
const cardPreview = document.querySelector('.preview__card'),
  selection1 = document.getElementById('selection1'),
  selection2 = document.getElementById('selection2'),
  selection3 = document.getElementById('selection3'),
  changeColorPalette = e => {
    cardPreview.classList.remove('theme1', 'theme2', 'theme3'),
      cardPreview.classList.add(e);
  };
selection1.addEventListener('change', () => {
  changeColorPalette('theme1');
}),
  selection2.addEventListener('change', () => {
    changeColorPalette('theme2');
  }),
  selection3.addEventListener('change', () => {
    changeColorPalette('theme3');
  });
const name = document.getElementById('name'),
  cardName = document.querySelector('.card__name'),
  job = document.getElementById('job'),
  cardJob = document.querySelector('.card__job'),
  linkEmail = document.querySelector('.email__link'),
  email = document.getElementById('email'),
  iconEmail = document.querySelector('.sm__email'),
  linkMobile = document.querySelector('.mobile__link'),
  mobile = document.getElementById('phone'),
  iconMobile = document.querySelector('.sm__phone'),
  linkLinkedin = document.querySelector('.linkedin__link'),
  linkedin = document.getElementById('linkedin'),
  iconLinkedin = document.querySelector('.sm__linkedin'),
  linkGit = document.querySelector('.github__link'),
  github = document.getElementById('github'),
  iconGit = document.querySelector('.sm__github'),
  changeDataCard = (e, n, t) => {
    const i = t.value;
    e.innerHTML = '' === i ? n : i;
  };
name.addEventListener('keyup', () => {
  changeDataCard(cardName, 'Nombre Apellido', name);
}),
  job.addEventListener('keyup', () => {
    changeDataCard(cardJob, 'Front-end developer', job);
  });
const changeLinkCard = (e, n, t, i) => {
  const d = t.value;
  '' === d
    ? (e.classList.add('hidden'), (n.href = ''))
    : (e.classList.remove('hidden'), (n.href = i + d));
};
email.addEventListener('keyup', () => {
  changeLinkCard(iconEmail, linkEmail, email, 'mailto:');
}),
  mobile.addEventListener('keyup', () => {
    changeLinkCard(iconMobile, linkMobile, mobile, 'tel:');
  }),
  linkedin.addEventListener('keyup', () => {
    changeLinkCard(iconLinkedin, linkLinkedin, linkedin, '');
  }),
  github.addEventListener('keyup', () => {
    changeLinkCard(iconGit, linkGit, github, '');
  });
