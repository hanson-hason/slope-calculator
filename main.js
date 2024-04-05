
// Pizza order by Pranav

// Place an Event Listener to the button to run the placeOrder function

document.getElementById("btn").addEventListener("click", greet);
// Store order code in a function
function greet() {
  //Input - extremely cool and awesome
  let x1 = +document.getElementById("x1").value;
  let x2 = +document.getElementById("x2").value;
  let y1 = +document.getElementById("y1").value;
  let y2 = +document.getElementById("y2").value;

  //Process - Create confirmation message using template strings

  let m = (y2 - y1)/(x2 - x1);
  let message = `the extremely cool and awesome slope of a line passing through (${x1}, ${y1}) and (${x2}, ${y2}) is ${m}`;

  


                                                                                                                                  
                                                                                                                                                                                                        
                                                                                                                                                                                                        
                                                                                                          

  //Output
  document.getElementById("output").innerHTML = message;
}
