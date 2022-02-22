let digital = document.querySelector('.digital');
let pSeconds = document.querySelector('.p_s');
let pMinutes = document.querySelector('.p_m');
let pHours = document.querySelector('.p_h');


const upadateClock = () => {
  let now = new Date();
  let hour = `${now.getHours()}`.padStart(2, '0');
  let min = `${now.getMinutes()}`.padStart(2, '0');
  let sec = `${now.getSeconds()}`.padStart(2, '0');

  digital.innerHTML = `${hour}:${min}:${sec}`; 


  let sDeg = ((360 / 60) * sec) - 90; // manipula o ponteiro de segundos
  let mDeg = ((360 / 60) * min) - 90; // manipula o ponteiro de minutos
  let hDeg = ((360 / 12) * hour) - 90; // manipula o ponteiro de horas


  pSeconds.style.transform = `rotate(${sDeg}deg)`;
  pMinutes.style.transform = `rotate(${mDeg}deg)`;
  pHours.style.transform = `rotate(${hDeg}deg)`;

}

setInterval(upadateClock, 1000);
upadateClock();