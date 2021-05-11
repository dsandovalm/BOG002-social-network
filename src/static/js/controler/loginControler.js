export function printHtml(id, message) {
  document.querySelector(`#${id}`).innerHTML = message;
}
