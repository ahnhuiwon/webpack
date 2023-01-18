import './style.css';
import my_image from './CDN1.png';

const image = `<img src=${my_image}>`;

document.getElementById("root").innerHTML = '안녕하세요! CDN이에요' + image;