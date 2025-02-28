import { Navigation } from 'react-native-navigation';
//Import all the screen in the app.
import HomeScreen from '../screens/HomeScreen';
//import ProfileScreen from './screens/ProfileScreen'; // Adjust paths as needed

export function registerScreens() {
  Navigation.registerComponent('Home', () => HomeScreen);
  //Navigation.registerComponent('Profile', () => ProfileScreen);
}
