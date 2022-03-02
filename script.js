// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
      console.log(listedPlanets);
   })
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       // Use helper functions to parse varibles listedPlanetsResponse
   //pickplanet on list planet varible
   let planet = pickPlanet(listedPlanets);
   addDestinationInfo(document,planet.name,planet.diameter,planet.star,planet.distance,planet.moon,planet.imageUrl)

 })


   



window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let pilotName = document.querySelector("input[name=pilot]");
       let copilotName = document.querySelector("input[name=copilot]");
        let fuelLevelName = document.querySelector("input[name=fuelLevel]");
        let cargoMassName = document.querySelector("input[name=cargoMass]");
       if (pilotName.value === "" || copilotName.value === ""|| fuelLevelName.value === ""||cargoMassName.value === "") {
          alert("All fields are required!");
          event.preventDefault();
       }
    });
 });

 validateInput();
 formSubmission();
 