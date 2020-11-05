let images = [
  "1.jfif",
  "2.jfif",
  "3.jpg",
  "4.jpg",
  "5.jfif"
];

let target = 0;

const goHome = () => {
  document.getElementById("myImg").src = images[0];
};

const moveBackwards = () => {
  target = target === 0 ? 4 : target - 1;
  document.getElementById("myImg").src = images[target];
};

const moveForward = () => {
  target = target === 4 ? 0 : target + 1;
  document.getElementById("myImg").src = images[target];
};
