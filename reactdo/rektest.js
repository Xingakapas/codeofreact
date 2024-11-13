function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
  
    let greeting;
    if (isLoggedIn) {
      greeting = <h1>Selamat datang!</h1>;
    } else {
      greeting = <h1>Silahkan login</h1>;
    }
  
    return (
      <div>
        {greeting}
      </div>
    );
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
  
    return (
      <div>
        {isLoggedIn ? <h1>Selamat datang!</h1> : <h1>Silahkan login</h1>}
      </div>
    );
  }
  function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn;
    const user = { firstName: 'John' };
  
    return (
      <div>
        {isLoggedIn && <h1>Halo, {user.firstName}!</h1>}
      </div>
    );
  }
  function Button(props) {
    return <button onClick={props.onClick}>{props.children}</button>;
  }
  
  function MyComponent() {
    const saveButton = <Button onClick={() => alert('Data disimpan')}>Simpan</Button>;
  
    return (
      <div>
        {saveButton}
      </div>
    );
  }
  function Greeting(props) {
    const { isLoggedIn, isAdmin } = props;
  
    let greeting;
    if (isAdmin) {
      greeting = <h1>Welcome, Admin!</h1>;
    } else if (isLoggedIn) {
      greeting = <h1>Welcome back!</h1>;
    } else {
      greeting = <h1>Please log in</h1>;
    }
  
    return (
      <div>
        {greeting}
      </div>
    );
  }