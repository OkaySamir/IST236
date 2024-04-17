import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MenuItem(props) {
  const navigation = useNavigation();

  function selectedListHandler() {
    navigation.navigate("MenuItems", {
      menuId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.menuindex % 2 === 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedListHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.price}>${props.price.toLocaleString()}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  price: {
    fontSize: 30,
    fontFamily: "Roboto",
    paddingBottom: 5
  },
  name: {
    fontSize: 25,
    fontFamily: "Roboto",
    paddingBottom: 5
  },
  description: {
    fontSize: 20,
    fontFamily: "Roboto",
    paddingBottom: 5
  }
});