import React from 'react';

function Greeting({ time }) {
  let greeting;

  if (time >= 5 && time <= 11) {
    greeting = 'Good Morning!';
  } else if (time >= 12 && time <= 17) {
    greeting = 'Good Afternoon!';
  } else if (time >= 18 && time <= 20) {
    greeting = 'Good Evening!';
  } else {
    greeting = 'Good Night!';
  }

  return <p>{greeting}</p>;
}

export default Greeting;