const leftBtn = document.querySelector(".btn-left")
const rightBtn = document.querySelector(".btn-right")
const buttons = document.querySelector(".btn")
const imagEl = document.querySelector(".images")

let pictures = ["1", "2", "3", "4", "5"];
let count = 0;

leftBtn.addEventListener("click", left);
rightBtn.addEventListener("click", right);

function right() {
  count++;
  if (count>pictures.length-1) {
    count = 0;
  }
  imagEl.style.background=`url("imgs/${pictures[count]}.png")`
}

function left() {
  count--;
  if (count<0) {
    count = pictures.length-1;
  }
  imagEl.style.background=`url("imgs/${pictures[count]}.png")`
}