import React from 'react';

// Komponen UserProfile
function UserProfile({ username, age, location }) {
  return (
    <div>
      <h2>Profil Pengguna</h2>
      <p>Username: {username}</p>
      <p>Usia: {age}</p>
      <p>Lokasi: {location}</p>
    </div>
  );
}

// Komponen App
function App() {
  const userInfo = {
    username: "johndoe",
    age: 25,
    location: "New York"
  };

  return (
    <div>
      <UserProfile {...userInfo} />
    </div>
  );
}

export default App; 