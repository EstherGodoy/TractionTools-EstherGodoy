import React from 'react';

const Header = (props) => {
  console.log('header', props);

  return (
    <header>
      <h1>If It Fits I Sits</h1>
      {/* props.auth ? <button onClick={props.logout}>Logout</button> : <button onClick={props.login}>Login</button> */}
    </header>
  )
}

export default Header;
