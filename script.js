// Write your JavaScript code here!

try{
   const { myFetch } = require("./scriptHelper.js");
} catch (error){
   
}

window.addEventListener("load", function(event) {
    
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    }).then(function () {
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document,chosenPlanet['name'],chosenPlanet['diameter'],chosenPlanet['star'],chosenPlanet['distance'],chosenPlanet['moons'],chosenPlanet['image']);
    })
   
    
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let document = document;
         let list = document.querySelector();
        let pilotName = document.querySelector("input[name=pilot]").value;
        let copilotName = document.querySelector("input[name=copilot]").value;
         let fuelLevelName = document.querySelector("input[name=fuelLevel]").value;
         let cargoMassName = document.querySelector("input[name=cargoMass]").value;
         let valid = formSubmission(document, list, pilot, coPilot, fuelLevel, cargoLevel, w)
        if(!valid){
         event.preventDefault();
           }
           event.preventDefault();
             })
            
         });

         document.querySelector('#faultyItems').style.visibility = 'hidden';
      