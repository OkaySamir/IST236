import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItem from "../components/MenuItems";


function MenuScreen(props){
    const insets = useSafeAreaInsets();
    const [menuItems, setMenuItems] = useState([
        {
            name: "Build Me Up Buttercup",
            image: require("../assets/images/buildmeup.PNG"),
            price: "$16.99",
            id: 1,
        },
        {
            name: "Have Your Cake and Eat It Too",
            image: require("../assets/images/havecake.PNG"),
            price: "$16.99",
            id: 2,
        },
        {
            name: "Salty But Sweet",
            image: require("../assets/images/salty.PNG"),
            price: "$16.99",
            id: 3,
        },
        {
            name: "S'mores the Merrier",
            image: require("../assets/images/smores.PNG"),
            price: "$16.99",
            id: 4,
        },
        {
            name: "Sweet Cheesus",
            image: require("../assets/images/cheesus.jpg"),
            price: "$16.99",
            id: 5,
        },
    ]);
    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top, 
                paddingBottom: insets.bottom,
                paddingLeft: insets.left, 
                paddingRight: insets.right

            }
        ]}>
            <View style={styles.titleContainer}>
                <Title>Menu</Title>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                data= {menuItems}
                keyExtractor={(item) => item.id}

                alwaysBounceVertical= {false}
                showsVerticalScrollIndicator = {false}
                renderItem={(itemData) => {
                    return (
                        <MenuItem
                            name={itemData.item.name}
                            image={itemData.item.image}
                            price={itemData.item.price}
                        />
                    );
                }}
                
                />
            </View>
            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Home Page</NavButton>
            </View>
        </View>
    );
}
// To be able to export
export default MenuScreen;

// styles 
const styles = StyleSheet.create({
    rootcontainer: {
      flex: 1,
      width: 400,
      alignItems: 'center',
    },
    titleContainer:{
        flex:1,
        justifyContent: "center",
    },
    listContainer:{
        flex: 7, 
        width: "95%",
    },
    buttonContainer:{
        flex: 1,
        marginTop: 20,
        alignItems: "center",
    },
 
  });