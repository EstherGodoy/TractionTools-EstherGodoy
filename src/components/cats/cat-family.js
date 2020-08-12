import React, {useState, useEffect} from 'react';
import SingleCat from '../cats/cat-single';

const CatFamily = (props) => {

  return (
    <div className="cat-dropdown">
      {props.cats && props.cats.length > 0 ?
        <ul>
            {props.cats && props.cats.length > 0 && props.cats.map((cat, index) => {
              return <SingleCat
                  key={cat.id}
                  type='family'
                  cat={cat}
                  addToFamily={props.addToFamily}
                  removeFromFamily={props.removeFromFamily}
                  getFamily={props.getFamily}
                />
            })}
        </ul>
        :
        <div id="no-cats">No cats in your family yet</div>
      }
    </div>
  )
}

export default CatFamily;
