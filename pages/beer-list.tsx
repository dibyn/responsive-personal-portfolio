import React, { FormEvent, memo, useCallback, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBeers } from '../api/index.api';
import RenderBeerList from '../contents/pageComponents/RenderBeerList';

const BEER_FETCH_NUMBER = 7
const index = memo(() => {
  const [fetchedNumber, setBeerFetchedNumber] = useState(BEER_FETCH_NUMBER);
  const [scrolled, setScrolled] = useState(false);
  const { data: beerList = [], isLoading } = useQuery(
    ['get-beers', fetchedNumber],
    () => getBeers(fetchedNumber)
  );
  const handleLoadMoreImage = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const incremented = fetchedNumber + 3;
      setBeerFetchedNumber(incremented);
    },
    [fetchedNumber]
  );
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        // setBeerFetchedNumber(14)
        setScrolled(true);
       }
      else setScrolled(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <>
      <RenderBeerList
        beerList={beerList}
        handleLoadMoreImage={handleLoadMoreImage}
        isLoading={isLoading}
      />
    </>
  );
});
export default index;
