const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const size = 30;

const snake = [ {x: 200, y: 200} ];

const drawSnake = () => 