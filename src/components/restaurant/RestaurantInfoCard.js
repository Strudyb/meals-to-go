import { SvgXml } from 'react-native-svg';
import open from '../../../assets/open';
import star from '../../../assets/star';
import { Spacer, Text } from '../base';
import Favourite from '../favourite/Favourite';
import {
  Address,
  Info,
  OpenStatus,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantIcon,
  Section,
} from './RestaurantInfoCard.styles';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />

      <Info>
        <Text variant="caption">{name}</Text>

        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}-${index}`}
              />
            ))}
          </Rating>

          <OpenStatus>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}

            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position="left" size="large">
              <RestaurantIcon source={{ uri: icon }} />
            </Spacer>
          </OpenStatus>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
