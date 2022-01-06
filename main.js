// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let modal = document.getElementById('modal');
let hearts = document.querySelectorAll('.like-glyph');
let modalMessage = document.getElementById('modal-message');

let errorCatch = (e) => {
  mimicServerCall()
  .then(() => handleHeartClick(e))
  .catch(error => handleError(error))
}  

let handleError = (errorMessage) => {
    modal.classList.remove('hidden')
    modalMessage.innerText = errorMessage
    setTimeout(() => { 
      modal.classList.add('hidden')
    modalMessage.innerText = ""
    }, 3000);
  }

let handleHeartClick = (e) => {
  if(e.target.textContent === EMPTY_HEART){
    e.target.classList.add('activated-heart')
    e.target.textContent = FULL_HEART
  } else { 
    e.target.classList.remove('activated-heart')
    e.target.textContent = EMPTY_HEART
  }  
}

for (let i = 0; i < hearts.length; i++){
  hearts[i].addEventListener('click', errorCatch)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
