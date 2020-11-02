let images = [
  "http://i.imgur.com/tI5jq2c.jpg",
  "http://i.imgur.com/37w80TG.jpg",
  "http://i.imgur.com/B1MCOtx.jpg",
];

const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
let target = 0;

const goHome = () => {
  document.getElementById("myImg").src = images[0];
};

const moveBackwards = () => {
  target = target === 0 ? 2 : target - 1;
  document.getElementById("myImg").src = images[target];
};

const moveForward = () => {
  target = target === 2 ? 0 : target + 1;
  document.getElementById("myImg").src = images[target];
};
