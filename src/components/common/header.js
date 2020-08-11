import React from "react";
import CatFamily from "../cats/cat-family";

const Header = (props) => {
  return (
    <header>
      <h1>If It Fits I Sits</h1>

      <button onClick={props.showFamily}>
        My Cat Fam {props.familyCount > 0 && props.familyCount}
      </button>

      {props.familyVisible && (
        <CatFamily
          cats={props.myFamily}
          getFamily={props.getFamily}
          removeFromFamily={props.removeFromFamily}
        />
      )}
    </header>
  );
};

export default Header;
