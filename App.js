import { createAppContainer, CreateStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeoplePage from './src/screens/PeoplePage';
import PeopleDetailPage from './src/screens/PeopleDetailPage';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage
  }

}, {
  defaultNavigationOptions: {
    title: 'People',
    headerStyle: {
      backgroundColor: '#46457C',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center',
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;