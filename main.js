// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

  var select = document.getElementById('planets');

// this populates the drop down list 
  for (var i=0;i<planets.length;i++){
    var planetIndex = planets[i][0];
    var elem = document.createElement('option');
    elem.textContent = planetIndex;
    elem.value = planets[i][0];
    select.appendChild(elem);
  };


  function calculateWeight(weight, planetName) {
    var calculate = 0;
    planets.forEach(function(planet) {
      if (planet[0] === planetName) {
        calculate = weight * planet[1];
      }
    });
    return calculate
  };
  
 
  function handleClickEvent(e) {
    var userWeight = parseInt(document.getElementById('user-weight').value);
    var planetName = document.querySelectorAll('#planets option')[document.getElementById('planets').selectedIndex].textContent;
    var result = calculateWeight(userWeight, planetName);
    document.getElementById('output').innerText = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
  };
  
 // event listener binding button to click handler 
  document.getElementById('calculate-button').addEventListener('click', handleClickEvent);
  // // Bonus Challenges
  // // 8. Reverse the drop down order so that the sun is first.
  // // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
  //document.querySelectorAll('#planets option')[document.getElementById('planets').selectedIndex].textContent;