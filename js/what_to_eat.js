const menu = [
  "부대찌개",
  "중국집",
  "칼국수",
  "냉면",
  "설렁탕",
  "순대국",
  "불고기",
  "샤브샤브",
  "쌀국수",
  "돈까스",
  "뼈해장국",
  "먼 뼈해장국",
  "뷔페",
  "직접고르기",
  "마라탕",
  "순두부",
  "된장찌개",
  "파스타집",
  "카레",
  "피자"
];

const opMenu = document.querySelector("#menu span span:first-child");

const todaysMenu = menu[Math.floor(Math.random() * menu.length)];

opMenu.innerText = todaysMenu;
