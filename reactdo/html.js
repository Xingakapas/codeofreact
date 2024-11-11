import React from 'react';

function Hello() {
  return <h1>Hello, world!</h1>;
}
import React from 'react';

function MyComponent() {
  return (
    <div style={{ color: 'blue', fontSize: '24px' }}>
      Hello, world!
    </div>
  );
}
import React from 'react';

function MyComponent() {
  const user = {
    name: 'John Doe',
    age: 30
  };

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>You are {user.age} years old.</p>
    </div>
  );
}