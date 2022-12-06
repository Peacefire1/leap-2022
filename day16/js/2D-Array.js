/**
 * 
 * Example-1 : Battleship
 * 
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * 
 * example-2 tic tac toe
 * | col 1 | col 2 | col 3 |
 * |    x  |   o   |   x   | => row1
 * |   o   |   o   |   x   | => row2
 * | x     |   x   |   o   | => row3
 * 
 * 
 */

// let row1 = [ "x" , "o" , "x"];
// let row2 = [ "o" , "o" , "x"];
// let row3 = [ "x" , "x" , "o"];
// console.log(row1);
// console.log(row2);
// console.log(row3);

let tictactoe = [[ "x" , "o" , "x"] , [ "o" , "o" , "x"] , [ "x" , "x" , "o"]];
console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1][1]);

// input -r tunhain tictactoe -iin baganiin bolood moriin index iig 
// daraaluulr avaad 3 dahi udaad n yugaar colihiig n ugnu.
tictactoe [prompt("Give me row ")] [prompt("give me column")] = prompt ("X or O");

console.log("for loop with for loop");

// tictactoe-iin buh murnii elmentiig hevlej haruulnuu 

for(let i = 0 ; i < tictactoe.length; i++){
    // console.log(tictactoe[i]);
    // double FOR LOOPS
    let output = "";
    for(let j = 0; j < tictactoe[i].length ; j++){
        output=output + "|" + tictactoe[i][j]+ "|" ;
        // console.log(tictactoe[i][j]);

    };
    console.log(output);
};
