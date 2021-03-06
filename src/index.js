import menuData from './menu.json';
import foodCardMarkup from './templates/food-card.hbs';
import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  localStgKey: 'Theme',
};

const foodMenuList = document.querySelector('.js-menu');
const themeSwichCheckbox = document.querySelector('#theme-switch-toggle')


foodMenuList.innerHTML = foodCardMarkup(menuData);

themeSwichCheckbox.addEventListener('change', onCheckboxChecked)

const currentValueThemeInLocalStg = localStorage.getItem(Theme.localStgKey)
checkCurrentTheme(currentValueThemeInLocalStg)

addLigthThemeDefault();
function addLigthThemeDefault() {
  const isHaveDarkTheme = document.body.classList.contains(Theme.DARK)
  
  if (isHaveDarkTheme) {
    return
  }

  document.body.classList.add(Theme.LIGHT);
}

function checkCurrentTheme(currentTheme) {
  if (currentTheme !== Theme.DARK) {
    return
  }

  document.body.classList.add(Theme.DARK)
  themeSwichCheckbox.checked = true;
}

function onCheckboxChecked(evt) {
  const checkBoxValue = evt.target.checked;

  if (checkBoxValue) {
    setDarkTheme();

    const currentTheme = document.body.classList.value;
    localStorage.setItem('Theme', currentTheme);
  }

  else {
    setLightTheme();

    const currentTheme = document.body.classList.value;
    localStorage.setItem('Theme', currentTheme);
  }
}

function setDarkTheme() {
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(Theme.DARK);
}

function setLightTheme() {
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
}
