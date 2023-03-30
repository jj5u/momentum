let menu = [
 {name: "부대찌개(육시리)", weight: 0.5},
 {name: "부대찌개(JVL)", weight: 2}, 
 {name: "중국집", weight: 4}, 
 {name: "명동칼국수", weight: 4}, 
 {name: "일본식가정식", weight: 1},
 {name: "설렁탕", weight: 3}, 
 {name: "순대국", weight: 3}, 
 {name: "불고기", weight: 2}, 
 {name: "쌀국수(포스코)", weight: 1},
 {name: "북창동순두부", weight: 1},
 {name: "북어국", weight: 1},
 {name: "카레돈까스", weight: 2.1}, 
 {name: "뼈해장국", weight: 1},
 {name: "감자탕", weight: 1},
 {name: "밀면(춘하추동밀면)", weight: 1},
 {name: "뷔페", weight: 4}, 
 {name: "된장찌개", weight: 1.5},
 {name: "파스타", weight: 1},
 {name: "즉석떡볶이(크레이지후라이)", weight: 1},
 {name: "피자(더피자스탠드)", weight: 0.5},
 {name: "샐러드😏(훅트포케)", weight: 0.1},
 {name: "아부리(일식집)", weight: 1},
 {name: "전주맛집", weight: 1},
 {name: "천사의 섬", weight: 1},
 {name: "버거킹", weight: 0.3},
 {name: "동태탕", weight: 1},
 {name: "순대볶음", weight: 1},
 {name: "보영만두", weight: 1},
 {name: "달래해장국", weight: 0.5},
 {name: "타코", weight: 0.3},
 {name: "칼국수(길건너)", weight: 1},
 {name: "먹보돼지", weight: 0.7},
 {name: "콩할머니", weight: 0.1},
 {name: "놀부부대찌개", weight: 1},
 {name: "국제시장해장국", weight: 0.1},
 {name: "삼계탕", weight: 0.6},
 {name: "초장집 장칼국수", weight: 0.1},
 {name: "투썸 옆", weight: 0.1},
 {name: "대한곱창", weight: 0.05},
 {name: "전주순대국", weight: 0.5},
 {name: "풍년집", weight: 0.7},
 {name: "김밥", weight: 0.3},
 {name: "닭볶음탕", weight: 0.4},
 {name: "보들미역", weight: 0.5},
];


function getRandomMenu() {
  const totalWeight = menu.reduce((prev, cur) => prev + cur.weight , 0);
  const selectedWeight = Math.random() * totalWeight;

  const lastMenuName = localStorage.getItem("lastMenuName");

  let startWeight = 0;
  let selectedMenu;

  for (let i = 0; i < menu.length; i++){
    const item = menu[i];

    startWeight = startWeight + item.weight;
    if (startWeight >= selectedWeight) {
      selectedMenu = item;
      break;
    }
  }

  if (selectedMenu.name == lastMenuName) {
    return getRandomMenu();
  } else {
    localStorage.setItem("lastMenuName", selectedMenu.name);
    return selectedMenu;
  }
}



const opMenu = document.querySelector("#menu span span:first-child");

const todaysMenu = getRandomMenu().name;

opMenu.innerText = todaysMenu;
