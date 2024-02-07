import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import MovieItem from "./components/MovieItem";

export default function App() {
  // state for storing movie data
  const [movieItems, setMovieItems] = useState([
    {
      name: "Star Wars: Revenge of the Sith",
      image: require("./assets/images/revengeofthesith.jpg"),
      rating: "10",
    },
    {
      name: "The Batman",
      image: require("./assets/images/thebatman.jpg"),
      rating: "9.9",
    },
    {
      name: "Whiplash",
      image: require("./assets/images/whiplash.jpg"),
      rating: "9.5",
    },
    {
      name: "Akira",
      image: require("./assets/images/akira.jpg"),
      rating: "9.5",
    },
    {
      name: "This is the End",
      image: require("./assets/images/thisistheend.jpg"),
      rating: "9.3",
    },
    {
      name: "Rocky II",
      image: require("./assets/images/rocky.jpg"),
      rating: "9.1",
    },
    {
      name: "Scream",
      image: require("./assets/images/scream.jpg"),
      rating: "8.8",
    },
    {
      name: "Bullet Train",
      image: require("./assets/images/bullettrain.jpg"),
      rating: "8.6",
    },
    {
      name: "Spiderman: Into The SpiderVerse",
      image: require("./assets/images/intothespiderverse.jpg"),
      rating: "8.5",
    },
    {
      name: "Wonka",
      image: require("./assets/images/wonka.jpg"),
      rating: "8.3",
    },
  ]);
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={movieItems}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MovieItem
                name={item.name}
                image={item.image}
                rating={item.rating}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
// styles for everything
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#666161",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "85%",
  },
});