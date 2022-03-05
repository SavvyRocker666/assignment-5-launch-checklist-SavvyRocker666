// Write your helper functions here!
try{
    require('isomorphic-fetch');
} catch(error){}
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let target = document.querySelector('#missionTarget');
    target.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src='${imageUrl}'>
    `;
}

function validateInput(testInput) {
   if(testInput !== ''){
       if(isNaN(testInput)){
           return "Not a Number";
       }
       return "Is a Number";
   }
   return "Empty";
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
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => response.json()).then(function(data) {
        return data;
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}
try{
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
} catch(error){}