
function dwarfRollCall(dwarves) {
 var roll = []
 
 for(var i = 0; i < dwarves.length; i++){
  roll.push(`${i +1}. ${dwarves[i]} `)
  }
  return roll.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var pc = planeteerCalls.map(element => element.toUpperCase() + "!")
  return pc
  
}

function longPlaneteerCalls(words) {
  for( var i = 0; i < words.length; i++) {
    if( words[i].length > 4)
    return (true)
  }
  return false
}

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++){
    if (foods[i]=="cheddar"
    ||foods[i]=="gouda"
    ||foods[i]=="camembert"
    ||foods[i]=="swiss") {
      return(foods[i])
    }
} 
  return "no cheese!"
}

function wordsWithB(words) {
  Bwords=[]
 words.filter(word => words.startwith("b") )
}