function pressMenu(x) {
  x.classList.toggle("cross");
  // x.nextSibling.nextSibling.classList.toggle("crossed");
  // console.log(x.nextSibling.nextSibling.classList);

}
function dropDown() {
  var changed = document
    .getElementById("dropdown")
    .children[0].classList.contains("container");
  console.log(changed);
}
document
  .getElementById("dropdown")
  .children[0].addEventListener(onclick, dropDown());
