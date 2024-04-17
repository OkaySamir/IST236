import { View, StyleSheet, FlatList } from "react-native";
import MenuItem from "./MenuItem";

function Menu(props) {
  function renderMenuItem(itemData) {
    const menuItemProps = {
      id: itemData.item.id,
      name: itemData.item.name,
      image: itemData.item.image,
      price: itemData.item.price,
      description: itemData.item.description,
      menuIndex: itemData.index,
    };
    return <MenuItem {...menuItemProps} />;
  }

  console.log(props.items);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
