import React, {useState, useEffect} from 'react';

const SingleCat = (props) => {

  //check if cat exists in familyCount
  const [inFamily, setInFamily] = useState(false);
  const [imageUrl, setImageUrl] = useState(props.cat ? props.cat.url : false);

  useEffect(() => {
   getFamily();
 }, [setInFamily]);


  const addToFamily = async (type) => {
    await props.addToFamily(props.cat);
    getFamily();
  }

  const removeFromFamily = () => {
    let updatedFamily = props.removeFromFamily(props.cat);
    getFamily();
  }

  const getFamily = async () => {
    //retrieve users family
    let updatedFamily = await props.getFamily();

    //then check if cat is in family
    setInFamily(updatedFamily.some(e => e.id === props.cat.id));
  }

  return (
    <li className={inFamily ? 'family' : ''}>
      <figure style={{backgroundImage: `url(${imageUrl})`}}>
        { props.type != 'family' ?
          <button className={inFamily ? 'remove' : 'add'} onClick={!inFamily ? addToFamily : removeFromFamily}>{!inFamily ? 'Add To Family' : 'Remove From Family'}</button>
          :
          <button className='dropdown-remove' onClick={removeFromFamily}>X</button>
        }
      </figure>
    </li>
  )
}

export default SingleCat;
