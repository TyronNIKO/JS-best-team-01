let footerNavList = document.querySelector('.js-hide-on-click');
// console.log(footerNavList);

function openFooterMenu() {
  let btn = document.querySelector('#footer-button-1');
  btn.classList.toggle('js-clicked');
  footerNavList.classList.toggle('is-open');
}
