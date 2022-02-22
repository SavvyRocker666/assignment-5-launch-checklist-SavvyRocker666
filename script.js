// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   console.log(response);
} );
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});


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
 