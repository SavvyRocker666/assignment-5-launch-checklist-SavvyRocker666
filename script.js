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

Event. preventDefault();
document.getElementById("form").addEventListener("submit", (e) => {
        
    const inputs = document.querySelectorAll('#form input');
    
    // Check for empty fields
    if ([...inputs].some(input => !input.value)) {
        e.preventDefault(); // Prevent form submitted until all fields are not empty
    }
    
    
    for (var i = 0; i < inputs.length; i++) {
        
        // Validate specific inputs - where "name" starts with "actual-temp"
        if(inputs[i].name.startsWith("actual-temp")) {
            validateActualTemp(inputs[i].value, inputs[i]); // This is another function to check values
        }
    }
        
});