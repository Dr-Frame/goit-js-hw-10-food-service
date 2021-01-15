const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const controlRef = document.querySelector('.theme-switch__toggle');

classRemember();

controlRef.addEventListener('change', handleColorChange);
function handleColorChange(event) {
  if (event.currentTarget.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    clearStorage();
    return;
  }
  if (event.currentTarget.checked === false) {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);

    clearStorage();

    return;
  }
}

function classRemember() {
  const savedClass = localStorage.getItem('theme-color');

  if (savedClass) {
    bodyRef.classList.add(savedClass);
    if (savedClass === Theme.DARK) {
      controlRef.checked = true;
    } else {
      controlRef.checked = false;
    }
  }
}
function clearStorage() {
  localStorage.removeItem('theme-color');
  localStorage.setItem('theme-color', bodyRef.classList);
}
