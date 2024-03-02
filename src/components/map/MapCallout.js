import CompactRestaurantInfo from '../restaurant/CompactRestaurantInfo';

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMapInfo={true} />;
};

export default MapCallout;
