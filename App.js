import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ShowResultsScreen from "./src/screens/ShowResultsScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ShowResults: ShowResultsScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Find Food!",
    },
  }
);

export default createAppContainer(navigator);
