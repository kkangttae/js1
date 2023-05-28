const images = [
    "0.jpeg", "1.jpeg", "2.jpeg",
];
const randomimg = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src=`bgimg/${randomimg}`;

document.body.appendChild(bgimg);
 