const button = document.querySelector('.submit-button');
// console.log(button);
// button.forEach(item => {
//   console.log(item);
// });

const sendFormData = function (event) {
  event.preventDefault();
  const parent = event.target.parentNode;
  let listInput = parent.querySelectorAll('input');
  //   listInput = Array.from(listInput);
  //   listInput.map(item => {
  listInput.forEach(item => {
    checkRadionButon(item);
  });
};

button.addEventListener('click', sendFormData);

function checkRadionButon(element) {
  let attr = element.getAttribute('checked');
  return attr !== null
    ? console.dir(element.value)
    : console.log('Поле пусте!');
}
button;
