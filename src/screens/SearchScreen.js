import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

//hooks add some kind of functionality to a function component

const SearchScreen = ({}) => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();
  const filterRestaurantsByPrice = (price) => {
    //price === $ || $$ || $$$
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterRestaurantsByPrice("$")}
          titleText="Expensive food? I don't know her"
        ></ResultsList>
        <ResultsList
          results={filterRestaurantsByPrice("$$")}
          titleText="Feelin' a 'lil Bougie "
        ></ResultsList>
        <ResultsList
          results={filterRestaurantsByPrice("$$$")}
          titleText="It's Payday!"
        ></ResultsList>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  resultsStyle: {
    fontFamily: "Lobster",
    fontWeight: "700",
  },
});

export default SearchScreen;
