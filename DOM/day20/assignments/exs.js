console.log("exercises");


console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-202").innerHTML);
console.log(document.getElementById("aimag-315").innerHTML);


document.getElementById("aimagNames").style = "font-size: 20px; border: 2px solid black; border-radius:20px; "
document.getElementById("aimag-101").style = "font-size: 20px; border: 2px solid black; background-color:yellow;  "
document.getElementById("aimag-202").style = "font-size: 20px; border: 2px solid black; background-color:red;  "
document.getElementById("aimag-315").style = "font-size: 20px; border-radius: 2px solid black; background-color:orange;  "

for(let i = 0; i < document.getElementsByClassName("khangai").length; i++){
    document.getElementsByClassName("khangai")[i].style = "front-size:35px; background-color:pink; margin:10px"
}

document.getElementsByTagName("span")[0].innerHTML=("gggg");
console.log(document.getElementsByTagName("span")[0]);

console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].id.includes("aimag-1"));

for(let i = 0 ; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++ ){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style="background-color:yellow;border:1px solid white; padding:10px"
    }
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style="background-color:pink;border:1px solid white; padding:10px"
    }
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-3")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style="background-color:orange;border:1px solid white; padding:10px"
    }
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-4")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style="background-color:aqua;border:1px solid white; padding:10px"
    }
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-5")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style="background-color:red; border:1px solid white; padding:10px"
    }
}

console.log(document.querySelector("#aimagNames"));
console.log(document.querySelector(".khangai"));


console.log(document.querySelectorAll(".khangai"));

document.querySelector("#demo").innerHTML="Date ; " + Date();
document.querySelector("img").src = "./img/d.jpeg"

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
main[0].appendChild(newDiv);