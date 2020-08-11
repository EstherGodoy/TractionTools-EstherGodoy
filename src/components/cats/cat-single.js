import React, { useState, useEffect } from "react";

const SingleCat = (props) => {
  const [inFamily, setInFamily] = useState(false);
  const [imageUrl, setImageUrl] = useState(props.cat ? props.cat.url : false);

  useEffect(() => {
    setCatsFamilyStatus();
  }, [props.myFamily]);

  const addToFamily = () => {
    props.addToFamily(props.cat);
    getUpdatedFamily();
  };

  const removeFromFamily = () => {
    props.removeFromFamily(props.cat);
    getUpdatedFamily();
  };

  const getUpdatedFamily = () => {
    props.getFamily();
    setCatsFamilyStatus();
  };

  const setCatsFamilyStatus = () => {
    setInFamily(
      props.myFamily &&
      props.myFamily.length > 0 &&
      props.myFamily.some((e) => e.id === props.cat.id)
    );
  };

  return (
    <li className={inFamily ? "family" : ""}>
      <figure style={{ backgroundImage: `url(${imageUrl})` }}>
        {props.type != "family" ?
          <button className={inFamily ? "remove" : "add"} onClick={!inFamily ? addToFamily : removeFromFamily}>
            {!inFamily ? "Add To Family" : "Remove From Family"}
          </button>
        :
          <button className="dropdown-remove" onClick={removeFromFamily}> X </button>
        }
      </figure>
    </li>
  );
};

export default SingleCat;
