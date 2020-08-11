import React, {useState, useEffect} from 'react';
import SingleCat from '../cats/single-cat';

const Main = (props) => {
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
            return <SingleCat cat={cat}/>
          })}
      </ul>
      <nav className='pagination'>
        {offset > 0 && <button onClick={() => {paginateCats('prev')}}>Give me less cats!</button>}
        {page < (Math.floor(props.catCount / CATS_PER_PAGE) - 1) && <button className='next' onClick={() => {paginateCats('next')}}>Give me more cats!</button>}
      </nav>
    </section>
  )
}

export default Main;
