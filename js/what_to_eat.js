const menu = [
  "부대찌개(육시리)",
  "부대찌개(JVL)",
  "부대찌개(JVL)",
  "부대찌개(JVL)",
  "중국집",
  "중국집",
  "중국집",
  "중국집",
  "명동칼국수",
  "명동칼국수",
  "명동칼국수",
  "명동칼국수",
  "일본식가정식",
  "설렁탕",
  "설렁탕",
  "설렁탕",
  "순대국",
  "순대국",
  "순대국",
  "불고기",
  "불고기",
  "쌀국수(포스코)",
  "북창동순두부",
  "북어국",
  "카레돈까스",
  "카레돈까스",
  "뼈해장국",
  "감자탕",
  "밀면(춘하추동밀면)",
  "뷔페",
  "뷔페",
  "뷔페",
  "뷔페",
  "된장찌개",
  "파스타",
  "즉석떡볶이(크레이지후라이)",
  "피자(더피자스탠드)",
  "샐러드😏(훅트포케)",
  "아부리(일식집)",
  "전주맛집",
  "천사의 섬",
  "동태탕",
  "순대볶음",
  "보영만두",
  "달래해장국",
];

const opMenu = document.querySelector("#menu span span:first-child");

const todaysMenu = menu[Math.floor(Math.random() * menu.length)];

opMenu.innerText = todaysMenu;
