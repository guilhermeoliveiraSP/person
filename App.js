import { createAppContainer, CreateStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeoplePage from './src/screens/PeoplePage';
import PeopleDetailPage from './src/screens/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/utilities';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage,
    navigationOptions: { title: 'Person' },
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const PeopleName = capitalizeFirstLetter(
        navigation.state.params.people.name.first
      );
      return ({
        title: PeopleName,
      });
    }
  }

}, {
  defaultNavigationOptions: {
    // title: 'Person',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#46457C',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      color: '#F7DDF4',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center',
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;