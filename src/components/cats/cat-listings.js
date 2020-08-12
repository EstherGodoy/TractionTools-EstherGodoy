import React, {useState, useEffect} from 'react';
import SingleCat from '../cats/cat-single';
import renderer from 'react-test-renderer';

const CatListings = (props) => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState('');
  const [page, setPage] = useState(0);

  const CATS_PER_PAGE = 8;

  useEffect(() => {
   fetchCats();
  }, []);

  useEffect(() => {
    if (offset > 0 || direction == 'prev') fetchCats()
  }, [offset, page, direction]);

  const fetchCats = async () => {
    //show loader
    setLoading(true);

    //fetch cats
    let newCats = await props.fetchCats(CATS_PER_PAGE, offset, page);

    // update visible cats
    if (newCats != cats) setCats(newCats);

    //remove loader
    setLoading(false);
  }

  const paginateCats = (direction) => {
    setOffset(direction == 'next' ? offset + CATS_PER_PAGE : offset - CATS_PER_PAGE);
    setPage(direction == 'next' ? page + 1 : page - 1);
    setDirection(direction);
  }


  return (
    <section>
     {loading && <div>loading...</div>}
      <ul className="cats">
          {cats && cats.length > 0 && cats.map((cat, index) => {
            return <SingleCat
                key={cat.id}
                cat={cat}
                addToFamily={props.addToFamily}
                removeFromFamily={props.removeFromFamily}
                myFamily={props.myFamily}
                getFamily={props.getFamily}
              />
          })}
      </ul>

      <nav className='pagination'>
        <button className="prev" disabled={offset <= 0} onClick={() => {paginateCats('prev')}}>Previous Page</button>
        <button className='next' disabled={page > (Math.floor(props.catCount / CATS_PER_PAGE) - 1)}  onClick={() => {paginateCats('next')}}>Next Page</button>
      </nav>
    </section>
  )
}

export default CatListings;
