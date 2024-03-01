import { useState, createContext, useEffect, useMemo } from 'react';
import {
  getRestaurants,
  transformRestaurantResponse,
} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      getRestaurants()
        .then(transformRestaurantResponse)
        .then((results) => setRestaurants(results))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
