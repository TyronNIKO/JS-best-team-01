console.log('hello user');
let footerNavList = document.getElementById('es-open');
let esFooterNavList = true;
function f() {
  if (esFooterNavList) {
    FooterNavList = footerNavList.classList.add('es-open');
    esFooterNavList = false;
  } else {
    FooterNavList = footerNavList.classList.remove('es-open');
    esFooterNavList = true;
  }
}
