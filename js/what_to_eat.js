const menu = [
  "부대찌개",
  "중국집",
  "칼국수",
  "냉면",
  "설렁탕",
  "순대국",
  "불고기",
  "샤브샤브",
  "찌개",
  "쌀국수",
  "돈까스",
];

const opMenu = document.querySelector("#menu span span:first-child");

const todaysMenu = menu[Math.floor(Math.random() * menu.length)];

opMenu.innerText = todaysMenu;
