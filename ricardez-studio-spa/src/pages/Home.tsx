import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchMessage } from '../store/slices/homeSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.home.message);

  useEffect(() => {
     dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
