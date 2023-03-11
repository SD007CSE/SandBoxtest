//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
var greet = "evening";
var colour = "blue";
// function greetings() {
const time = new Date().getHours();
if (time < 12 && time >= 0) {
  var colour = "red";
  var greet = "Good Morning";
} else if (time >= 12 && time < 18) {
  var colour = "green";
  var greet = "Good Afternoon";
} else if (time >= 18 && time < 24) {
  var colour = "blue";
  var greet = "Good evening";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: colour }}>
      {greet}
    </h1>
  </div>,
  document.getElementById("root")
);
