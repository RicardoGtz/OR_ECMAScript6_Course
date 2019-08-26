import {Enviroment} from './enviroment.js'
import {options,print} from './additions.js'

const defaultLine="Start your jorney now!";
const BR="<br />";

var enviroment=new Enviroment("Forest -");
var treasures=new WeakMap();
var tresCoords=new Set();

function main(){
    let enterEl=document.querySelector("#enter");
    enterEl.addEventListener("click",onClickEnter,false); 
    addToOutput();

    var coordinate1={x:2,y:2};
    tresCoords.add(coordinate1);
    treasures.set(coordinate1,{name:"treausre chest", value: 100});
    var coordinate2={x:2,y:0}
    tresCoords.add(coordinate2);
    treasures.set(coordinate2,{name:"medaillon", value: 10});
}

function findTreasures(){
    let findCoords
    for(let coords of tresCoords){
        if(coords.x == x && coords.y ==y){
            findCoords=coords;
        }
    }
    if(findCoords){
        var {name,value} =treasures.get(findCoords);
        if(value){
            addToOutput(`you found ${name} (${value})`);
        }
    }
}

var x=0, y=0;

function navigate(stepX,stepY){
    [x,y]=[x+stepX,y+stepY];
    

    let coordinates=document.querySelector("#coordinates");
    coordinates.innerHTML=`${x},${y}`;

    findTreasures();
}

function addToOutput(newLine=defaultLine){
    let output=document.querySelector("#output");
    output.innerHTML=output.innerHTML+BR+newLine;
}

function onCommand(command){
    if(command==="help"){
        options.outpoutOptions();
    }else if(command==="left"){
        navigate(-1,0);
        addToOutput(enviroment.stumbleUpon(command));
    }else if(command==="right"){
        navigate(1,0);
        addToOutput(enviroment.stumbleUpon(command));
    }else if(command==="up"){
        navigate(0,1);
        addToOutput(enviroment.stumbleUpon(command));
    }else if(command==="down"){
        navigate(0,-1);
        addToOutput(enviroment.stumbleUpon(command));
    }else{
        addToOutput(command);
    }

}

function onClickEnter(){
    let commands=document.querySelector("#commands");

    onCommand(commands.value);
}

main();

print("hola","wey");
console.log("hello");
console.log(Object.getOwnPropertySymbols(options));