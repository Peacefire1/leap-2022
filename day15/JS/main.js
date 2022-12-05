/**
 * Game setup
 * 
 * user should guess a number
 * 
 * we need to creare new ship on the board
 * 
 * | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
 * | x | x | o | o | o | x | x |
 * 
 */

let guesses = 0 ;
let isSunk = false ;
let hit = 0 ;

let location1 = 3 ; 
let location2 = 4 ;
let location3 = 5 ;


while(!isSunk){
    console.log("game begins");

    let userGuess = Number(prompt("Give me your possition"))
    console.log(userGuess);
    guesses =guesses +1;

    if(guesses > 5){
        console.log(guesses);
        break;
    }
       
    if(userGuess > 0 && userGuess < 7){

        if(location1 == userGuess || location2 == userGuess || location3 == userGuess){
            hit = hit + 1 ;
            //if you hit the location
            if(location1 == userGuess){
                location1 = -1;
            }
            if(location2 == userGuess){
                location2 = -1;
            }
            if(location3 == userGuess){
                location3 = -1;
            }
            alert("hit")
        }else{
            alert("miss")
        }
        if (hit == 3){
            
            isSunk = true;
        }
    }else{
        alert("Give me number between 1 and 6")
    }
}

// game loop is ended

if(isSunk && guesses < 6){
    alert("you won");
} else if (guesses > 6){
    alert("you lost");
}

console.log("game ends")
