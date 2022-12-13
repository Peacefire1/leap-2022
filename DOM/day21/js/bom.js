console.log("BOM JS")
console.log(window);
// window.alert("hello")

window.open("https://google.com","Hello");

let result = window.confirm("Do you wanna to Quit?");
console.log(result);

let message = result ? "Та ok дарлаа" :
"Ta cancel tobch darlaa";

alert(message)

let counter = 0 ;

// setInterval(startInterval,1000);

startMytimer.addEventListener("click",startInterval)
startMytimer.addEventListener("click",runTimerInterval)

function startInterval(){
    let now = new Date ();
    let myTimer = document.getElementById("myTimer");
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();
    myTimer.innerHTML = (`${hour}:${minutes}:${second}`);
    console.log(counter);
    counter++;
}



function runTimerInterval(){
    window.setInterval(startInterval,1000)
}

