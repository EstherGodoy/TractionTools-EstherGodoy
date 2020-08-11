import React from 'react';

const SingleCat = (props) => {
  return (
    <li key={props.cat.id}>
      <figure style={{backgroundImage: `url(${props.cat.url})` }}>
        <button>Take Me Home <i class="fas fa-cat"></i></button>
      </figure>
    </li>
  )
}

export default SingleCat;
