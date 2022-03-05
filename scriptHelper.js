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
    
    let statusArray = [
        new StatObj('Pilot',pilot),
        new StatObj('Co-pilot',copilot),
        new StatObj('Fuel level',fuelLevel),
        new StatObj('Cargo mass',cargoLevel)
    ]
    let launchStat = getLaunchStatus(statusArray);
    if(launchStat !== "Shuttle is Ready for Launch"){
        showAlert(statusArray);
    }
    statusArray.push(launchStat);
    showStatus(doc,statusArray);
    updateStatusColor(doc);
    if(list.style.visibility === 'hidden'){
        toggleVisibility(list);
    }

function getLaunchStatus(statusArray){
    let returnStatus;
    for(let a=0;a<statusArray.length;a++){
        if(statusArray[a].status.includes('is ready for launch')||statusArray[a].status.includes('Fuel level high enough for launch')||statusArray[a].status.includes('Cargo mass low enough for launch')){
            if(returnStatus === undefined){
                returnStatus = 'Shuttle is Ready for Launch';
            }
        } else {
            returnStatus = 'Shuttle Not Ready for Launch';
        }
    }
    return returnStatus;
}
function showStatus(doc, statusArray){
    doc.querySelector('#pilotStatus').innerHTML =statusArray[0].status;
    doc.querySelector('#copilotStatus').innerHTML = statusArray[1].status;
    doc.querySelector('#fuelStatus').innerHTML = statusArray[2].status;
    doc.querySelector('#cargoStatus').innerHTML = statusArray[3].status;
    doc.querySelector('#launchStatus').innerHTML = statusArray[4];
}
function updateStatusColor(doc){
    let statusReport = doc.querySelector('#launchStatus');
    switch(statusReport.innerHTML){
        case ("Shuttle is Ready for Launch"):
            statusReport.style.color = 'rgb(65, 159, 106)';
        break;
        default:
            statusReport.style.color = 'rgb(199, 37, 78)';
    }
}
function showAlert(statusArray){
    let msg = '';
    for(let a=0;a<statusArray.length;a++){
       if(statusArray[a].status.includes('Not')||statusArray[a].status.includes('too')){
           msg += statusArray[a].status + '\n';
       };
    }
    try{
        if(msg){
            window.alert(msg);
        }
    } catch(error){}
}
function toggleVisibility(el){
    if (el.style.visibility === 'visible'){
        el.style.visibility = 'hidden';
    } else {
        el.style.visibility = 'visible';
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