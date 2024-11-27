/*
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

*/

const toggleLampBtn = document.getElementById('lamp-btn');


toggleLampBtn.addEventListener('click', () =>{
  const lampEl = document.getElementById('lamp');

  if(lampEl.src.includes('img/white_lamp.png')){
    lampEl.src = 'img/yellow_lamp.png';
    toggleLampBtn.innerHTML = 'Spegni'
  } else{
    lampEl.src = 'img/white_lamp.png';
    toggleLampBtn.innerHTML = 'Accendi'
  }

})