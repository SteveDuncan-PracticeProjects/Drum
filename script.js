function playSound(e) {
    let keyCode;
    if(e.keyCode){
        // called from key press
        keyCode = e.keyCode;       
     } else {
        //  called from mouse click
         keyCode = this.dataset.key;
     }

    // get audio file with matching data-key for selected key
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    // get key code for selected key
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(!audio) return; // exit function if keys other than sound keys are pressed
   
    audio.currentTime = 0; //rewind sound file to start; this allows rapid repeat of sound
    audio.play();
    key.classList.add('playing'); //add class for css transform effects
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  //skip if not a transform
    this.classList.remove('playing');
};

// add event listeners
// call function to play audio file on key press
window.addEventListener('keydown', playSound);

// to remove remove transform effect from each key
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSound));
