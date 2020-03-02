
function dwarfRollCall(dwarves) {
 var roll = []
 var i = 0  
  dwarves.forEach(function(name, i) {
   roll.push(i +1 + ". " + name + " ")
  })
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
    ||foods[i]=="camembert")
    return(foods[i])
    } 
  return "no cheese!"
}