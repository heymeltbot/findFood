import React from "react";
import { useFonts } from "@use-expo/font";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ShowResultsScreen from "./src/screens/ShowResultsScreen";
import AppLoading from "expo-app-loading";

const appNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    ShowResults: ShowResultsScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "I'm Hungry For...",

      headerStyle: {
        backgroundColor: "#FF1199",
        borderColor: "yellow",
        borderWidth: 5,
        borderRadius: 20,
        shadowColor: "transparent",
        borderBottomColor: "yellow",
      },
      headerTintColor: "#13F4EF",

      headerTitleStyle: {
        fontWeight: "800",
        alignSelf: "center",
        fontFamily: "Lobster",
        fontSize: 33,
      },
    },
  }
);

const RootNavigator = createAppContainer(appNavigator);

const customFonts = {
  Tourney: require("./assets/fonts/TourneyVariableFont.ttf"),
  Lobster: require("./assets/fonts/Lobster-Regular.ttf"),
  Vibur: require("./assets/fonts/Vibur-Regular.ttf"),
};

const App = () => {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }
  return <RootNavigator />;
};
console.log("AppLoading", AppLoading);

export default App;
