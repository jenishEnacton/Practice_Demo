import RScreen1 from '../reduxScreens/rScreens/RScreen1';
import AddUser from '../screens/drawerScreens/AddUser';
import UserDetail from '../screens/drawerScreens/UserDetail';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Splash from '../screens/Splash';
import Favourite from '../screens/tabscreens/Favourite';
import Home from '../screens/tabscreens/Home';
import Profile from '../screens/tabscreens/Profile';
import DrawerNavigation from './types/DrawerNavigation';
import TabNavigation from './types/TabNavigation';

export const StackRoute = {
  Splash,
  Screen1,
  Screen2,
  Screen3,
  TabNavigation,
  DrawerNavigation,
  RScreen1,
};

export const TabRoute = {
  Home,
  Favourite,
  Profile,
};

export const DrawerRoute = {
  AddUser,
  UserDetail,
};
