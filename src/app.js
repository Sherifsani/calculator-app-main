const dot = document.querySelector(".dot");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const displayNo = document.querySelector(".display-no");
const numkeys = document.querySelectorAll(".k");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const body = document.querySelector("body");
const togglebg = document.querySelector(".theme-btns");
const head = document.querySelector("h1");
const texts = document.querySelectorAll(".b");
const keyholder = document.querySelector(".keys");
const delkeys = document.querySelectorAll(".de");
// this can be done easily using object but i chose to hard code cuz  i can
// const theme = {
//   "theme-one": {
//     bg: {
//       mainBg: "rgb(58, 71, 100)",
//       togglebg: "",
//       screenbg: "",
//     },
//   },
// };

first.addEventListener("click", function () {
  dot.style.translate = "0%";
  body.classList.remove("theme-two-bg");
  body.classList.remove("theme-three-bg");
  togglebg.classList.add("theme-one-dot");
  togglebg.classList.remove("theme-two-dot");
  togglebg.classList.remove("theme-three-dot");
  head.classList.add("theme-one-text");
  head.classList.remove("theme-two-text");
  head.classList.remove("theme-three-text");
  for (let text of texts) {
    text.classList.add("theme-one-text");
    text.classList.remove("theme-two-text");
    text.classList.remove("theme-three-text");
  }
  dot.classList.add("theme-dot-one");
  dot.classList.remove("theme-dot-two");
  dot.classList.remove("theme-dot-three");
  equal.classList.add("shade-one-eq");
  equal.classList.remove("shade-two-eq");
  equal.classList.remove("shade-three-eq");
  displayNo.classList.add("screen-one");
  displayNo.classList.remove("screen-two");
  displayNo.classList.remove("screen-three");
  keyholder.classList.add("screen-one");
  keyholder.classList.remove("screen-two");
  keyholder.classList.remove("screen-three");
  for (let numkey of numkeys) {
    numkey.classList.add("key-one");
    numkey.classList.remove("key-two");
    numkey.classList.remove("key-three");
  }
  for (let delkey of delkeys) {
    delkey.classList.add("del-one");
    delkey.classList.remove("del-two");
    delkey.classList.remove("del-three");
  }
});

second.addEventListener("click", function () {
  dot.style.translate = "100%";
  body.classList.add("theme-two-bg");
  body.classList.remove("theme-three-bg");
  togglebg.classList.add("theme-two-dot");
  togglebg.classList.remove("theme-one-dot");
  togglebg.classList.remove("theme-three-dot");
  head.classList.add("theme-two-text");
  head.classList.remove("theme-one-text");
  head.classList.remove("theme-three-text");
  for (let text of texts) {
    text.classList.add("theme-two-text");
    text.classList.remove("theme-one-text");
    text.classList.remove("theme-three-text");
  }
  dot.classList.add("theme-dot-two");
  dot.classList.remove("theme-dot-one");
  dot.classList.remove("theme-dot-three");
  equal.classList.add("shade-two-eq");
  equal.classList.remove("shade-one-eq");
  equal.classList.remove("shade-three-eq");
  displayNo.classList.add("screen-two");
  displayNo.classList.remove("screen-one");
  displayNo.classList.remove("screen-three");
  keyholder.classList.add("screen-two");
  keyholder.classList.remove("screen-one");
  keyholder.classList.remove("screen-three");
  for (let numkey of numkeys) {
    numkey.classList.remove("key-one");
    numkey.classList.add("key-two");
    numkey.classList.remove("key-three");
  }
  for (let delkey of delkeys) {
    delkey.classList.add("del-two");
    delkey.classList.remove("del-one");
    delkey.classList.remove("del-three");
  }
});

third.addEventListener("click", function () {
  dot.style.translate = "200%";
  body.classList.add("theme-three-bg");
  body.classList.remove("theme-two-bg");
  togglebg.classList.add("theme-three-dot");
  togglebg.classList.remove("theme-one-dot");
  togglebg.classList.remove("theme-two-dot");
  head.classList.add("theme-three-text");
  head.classList.remove("theme-two-text");
  head.classList.remove("theme-one-text");
  for (let text of texts) {
    text.classList.add("theme-three-text");
    text.classList.remove("theme-one-text");
    text.classList.remove("theme-two-text");
  }
  dot.classList.add("theme-dot-three");
  dot.classList.remove("theme-dot-two");
  dot.classList.remove("theme-dot-one");
  equal.classList.add("shade-three-eq");
  equal.classList.remove("shade-two-eq");
  equal.classList.remove("shade-one-eq");
  displayNo.classList.add("screen-three");
  displayNo.classList.remove("screen-two");
  displayNo.classList.remove("screen-one");
  keyholder.classList.add("screen-three");
  keyholder.classList.remove("screen-two");
  keyholder.classList.remove("screen-one");
  for (let numkey of numkeys) {
    numkey.classList.remove("key-one");
    numkey.classList.remove("key-two");
    numkey.classList.add("key-three");
  }
  for (let delkey of delkeys) {
    delkey.classList.add("del-three");
    delkey.classList.remove("del-two");
    delkey.classList.remove("del-one");
  }
});
for (let key of numkeys) {
  key.addEventListener("click", function () {
    displayNo.textContent += key.textContent;
    console.log(key.textContent);
  });
}
reset.addEventListener("click", function () {
  displayNo.textContent = null;
});
equal.addEventListener("click", function () {
  displayNo.textContent = eval(displayNo.textContent);
});
del.addEventListener("click", function () {
  displayNo.textContent = displayNo.textContent.toString().slice(0, -1);
});
console.log(togglebg);
// togglebg.style.background = "red";
