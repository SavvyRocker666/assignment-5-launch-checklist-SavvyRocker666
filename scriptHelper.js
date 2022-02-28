// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementId("missionTarget")
               div.innerHTML = `<h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter} </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth:${distance} </li>
                   <li>Number of Moons:${moons} </li>
               </ol>
               <img src="${imageUrl}">`
  
}

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty"
   } else if (isNaN(testInput)){
       return "Is Not a Number"
   }else{
       return "Is a Number"
   }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const fuelStatus = document.getElementId("fuelStatus")
   const pilotStatus = document.getElementId("pilotStatus")
   const copilotStatus =  document.getElementId("copilotStatus")
   const cargoStatus = document.getElementId("cargoStatus")
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
} else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
    alert("Make sure to enter valid information for each field!");
}else{
    let launchStatus = document.getElementId("launchStatus")
    if (fuelLevel < 10000 && cargoLevel <= 10000) {
    fuelStatus.innerHTML = "Fuel Level is too low for launch"
    cargoStatus.innerHTML = "Cargo Level is too low for launch"
   launchStatus.innerHTML = "Not ready for launch" 
   launchStatus.style.color = "Red"
}else if (fuelLevel >10000 && cargoLevel > 10000){
    fuelStatus.innerHTML = "Fuel Level is too high for launch"
    cargoStatus.innerHTML = "Cargo Level is too high for launch"
    launchStatus.innerHTML = "Not ready for launch"
    launchStatus.style.color = "Red"
}else if (fuelLevel < 10000 && cargoLevel > 10000){
    fuelStatus.innerHTML = "Fuel Level is too low for launch"
    cargoStatus.innerHTML = "Cargo Level is too high for launch"
    launchStatus.innerHTML = "Not ready for launch"
    launchStatus.style.color = "Red"
}else{
fuelStatus.innerHTML = "Fuel Level is good for launch"
cargoStatus.innerHTML = "Cargo Lever is good for launch"
launchStatus.innerHTML = "Ready for launch"
launchStatus.style.color = "Green"
}
}
}

async function myFetch() {
    let planetsReturned;
    
    planetsReturned= await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        if (response.status >= 400){
            throw new Error("Bad Response") 
        }else {
            return response.json()
        }
    })
    
    return planetsReturned;
}

function pickPlanet(planets) {
   let index = Math.floor(Math.random()*planets.length)
   return planets [index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
