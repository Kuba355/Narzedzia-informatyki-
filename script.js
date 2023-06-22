let heading = document.querySelector('h1');
let paragraph = document.querySelector('p');
setInterval(() => {
  let fontSize = Math.random() * 80;
  heading.style.fontSize = `${fontSize}px`;
  let color = Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255;
  heading.style.color = `rgb(${color})`;
}, 1000);

setInterval(() => {
  
  paragraph.style.transform = 'rotate(' + Math.random()*180 + ')';
}, 1000);