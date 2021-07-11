import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

//hooks add some kind of functionality to a function component

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();
  const filterRestaurantsByPrice = (price) => {
    //price === $ || $$ || $$$
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} results</Text>
      <ResultsList
        results={filterRestaurantsByPrice("$")}
        titleText="Broke"
      ></ResultsList>
      <ResultsList
        results={filterRestaurantsByPrice("$$")}
        titleText="Feelin' a 'lil Bougie "
      ></ResultsList>
      <ResultsList
        results={filterRestaurantsByPrice("$$$")}
        titleText="It's Payday!"
      ></ResultsList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
