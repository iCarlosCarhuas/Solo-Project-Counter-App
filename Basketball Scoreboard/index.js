// count variable
let homeCounter = document.getElementById("home-counter")
let guestCounter = document.getElementById("guest-counter")
let addElHome = 0
let addElGuest = 0


//foul variable
let homeFoulCounter = document.getElementById("home-fouls")
let guestFoulCounter = document.getElementById("guest-fouls")
let addElHomeFoul = 0
let addElGuestFoul = 0

//timer variable
let timerCounter = document.getElementById("timer-count")
let timerEl = 24


//Home Functions

function add1Home(){
    addElHome += 1
    homeCounter.textContent = addElHome
}

function add2Home(){
    addElHome += 2
    homeCounter.textContent = addElHome
}

function add3Home(){
    addElHome += 3
    homeCounter.textContent = addElHome
}

function add1HomeFoul(){
    addElHomeFoul += 1
    homeFoulCounter.textContent = addElHomeFoul
}

//Guest Function

function add1Guest(){
    addElGuest += 1
    guestCounter.textContent = addElGuest
}

function add2Guest(){
    addElGuest += 2
    guestCounter.textContent = addElGuest
}

function add3Guest(){
    addElGuest += 3
    guestCounter.textContent = addElGuest
}

function add1GuestFoul(){
    addElGuestFoul += 1
    guestFoulCounter.textContent = addElGuestFoul
}


var
  count=  24,
  counter = setInterval(timer, 1000),
  running = true;

function timer() {
  count -= 1;
  
  if (count <= 0) {
    clearInterval(counter);
  }
  
    timerCounter.textContent = count 
  }

window.addEventListener("keydown", function(e) {
  switch(e.keyCode) {
  
    case 32: // PLAY
      running ? clearInterval(counter) : counter = setInterval(timer, 1000);
      running = !running;
      break;
    
    case 82: // RESET
      clearInterval(counter);
      timerCounter.textContent  = 24;
      count = 24;
      running = false;
  }
});

//RESET TIMER
function resetTimer() {
    timerCounter.textContent = 24
    count = 24
}

//RESET FUNCTION

function reset() {
    
    homeCounter.textContent = 0
    addElHome = 0
    guestCounter.textContent = 0
    addElGuest = 0
    homeFoulCounter.textContent = 0
    addElHomeFoul = 0
    guestFoulCounter.textContent = 0
    addElGuestFoul = 0 
    timerCounter.textContent = 24
    count = 24
        
}


