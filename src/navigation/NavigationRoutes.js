import User from '../api/User';
import Userdetail from '../api/Userdetail';
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
import TopTab1 from '../screens/topTabScreens/TopTab1';
import TopTab2 from '../screens/topTabScreens/TopTab2';
import DrawerNavigation from './types/DrawerNavigation';
import TabNavigation from './types/TabNavigation';
import TopTabNavigation from './types/TopTabNavigation';

export const StackRoute = {
  Splash,
  Screen1,
  Screen2,
  Screen3,
  TabNavigation,
  DrawerNavigation,
  RScreen1,
  User,
  Userdetail,
  TopTabNavigation,
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

export const TopTabRoute = {
  TopTab1,
  TopTab2,
};
