import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

import Navigation from './src/infrastructure/navigation';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { FavouritesContextProvider } from './src/services/favourites/FavouritesContext';
import { AuthenticationContextProvider } from './src/services/authentication/AuthenticationContext';

export default function App() {
  const [oswaqldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaqldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
