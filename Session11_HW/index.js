const getRandomHexaColor = function() {
  const hexa = '0123456789abcdef';
  let color = '#', random = null;
  // random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  // color = color + hexa[random];
  // random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  // color = color + hexa[random];
  // random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  // color = color + hexa[random];
  // random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  // color = color + hexa[random];
  // random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  // color = color + hexa[random];
  // random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  // color = color + hexa[random];
  for (let index = 0; index < 6; index++) {
    random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    color = color + hexa[random];
  }
  console.log(color);
  return color;
};
setInterval(function() {
  document.querySelector('body').style.backgroundColor = getRandomHexaColor();
}, 100);

const clockCounter = document.querySelector('.now');
// const getCurrentTime = function() {
//   const date = new Date();
//   console.log(date);
//   let format = '';
//   format = format + date.getFullYear();
//   format = format + '년 ';
//   format = format + (date.getMonth() + 1);
//   format = format + '월 ';
//   format = format + date.getDate();
//   format = format + '일 ';
//   format = format + date.getHours();
//   format = format + '시 ';
//   format = format + date.getMinutes();
//   format = format + '분 ';
//   format = format + date.getSeconds();
//   format = format + '초';
//   clockCounter.innerHTML = format;
// };
const getCurrentTime = function() {
  const date = new Date();
  console.log(date);
  let format = '', year = date.getFullYear(), month = (date.getMonth() + 1), day = date.getDate()
    , hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
  format = format + year;
  format = format + '년 ';
  format = format + (month < 10 ? '0' + month : month);
  format = format + '월 ';
  format = format + (day < 10 ? '0' + day : day);
  format = format + '일 ';
  format = format + (hours < 10 ? '0' + hours : hours);
  format = format + '시 ';
  format = format + (minutes < 10 ? '0' + minutes : minutes);
  format = format + '분 ';
  format = format + (seconds < 10 ? '0' + seconds : seconds);
  format = format + '초';
  clockCounter.innerHTML = format;
};
const initClock = function() {
  getCurrentTime();
  setInterval(getCurrentTime, 1000);
};
initClock();
