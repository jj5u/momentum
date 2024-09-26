const colors = [
  "#f0f8ff", // Alice Blue
  "#fafad2", // Light Goldenrod Yellow
  "#ffe4e1", // Misty Rose
  "#e6e6fa", // Lavender
  "#ffefd5", // Papaya Whip
  "#f5f5dc", // Beige
  "#ffe4b5", // Moccasin
  "#d8bfd8", // Thistle
  "#add8e6", // Light Blue
  "#b0e0e6", // Powder Blue
  "#ffdab9", // Peach Puff
  "#e0ffff", // Light Cyan
  "#f5fffa", // Mint Cream
  "#f0e68c", // Khaki
  "#faf0e6", // Linen
];

// 두 가지 색상을 랜덤으로 선택
const color1 = colors[Math.floor(Math.random() * colors.length)];
const color2 = colors[Math.floor(Math.random() * colors.length)];

// linear-gradient로 두 색상을 배경에 적용
document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
document.body.style.color = "black"; // 텍스트 색상을 블랙으로 설정
