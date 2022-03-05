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
   
   let form = document.querySelector('form');
   form.addEventListener('submit',function(event){
        let doc = document;
        let arr = document.defaultView || doc.parentWindow;
        arr.name = 'launchReport';
        let list = document.querySelector('#faultyItems');
        let pilot = document.querySelector('#pilotName').value;
        let coPilot = document.querySelector('input[name=copilotName]').value;
        let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        let cargoMass = document.querySelector('input[name=cargoMass]').value;
        let valid = formSubmission(document,list,pilot,coPilot,fuelLevel,cargoMass,arr);
        if(!valid){
            event.preventDefault();
        }
        event.preventDefault();
   });
   document.querySelector('#faultyItems').style.visibility = 'hidden';
});

         document.querySelector('#faultyItems').style.visibility = 'hidden';
      