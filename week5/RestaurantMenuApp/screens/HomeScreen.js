import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";


function HomeScreen(props){
    const insets = useSafeAreaInsets();
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
                <Title>Crazy Mason</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={require("../assets/images/crazymason.jpg")}
                />
            </View>

            <View style={styles.infoContainer}>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("tel:843-712-1117")}
            >
            843-712-1117
            </Text>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("https://www.google.com/maps/dir//The+Crazy+Mason+Milkshake+Bar,+2461+Coastal+Grand+Cir,+Myrtle+Beach,+SC+29577/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89006bb6a198ba0d:0xe045ee2bcce0688a?sa=X&ved=2ahUKEwii5eSq6amEAxW24skDHcIMAy4Q48ADegQIDxAA&hl=en")}
            >
            2461 Coastal Grand Cir{"\n"} Myrtle Beach{"\n"} SC 29577
            </Text>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("https://www.thecrazymason.com/")}
            >
            www.thecrazymason.com
            </Text>
            </View>
        <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Menu</NavButton>
        </View>
        </View>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
    rootcontainer: {
      flex: 1,
      alignItems: 'center',
    },
    titleContainer:{
        flex:1,
        justifyContent: "center",
    },
    imageContainer: {
        flex:4,
        paddingTop:15,
    }, 
    image:{
        resizeMode:"cover",
        height: "100%",
        width: 380,
        borderWidth: 5,
        borderColor: "white", 
        borderRadius: 20,
    },
    infoContainer:{
        flex: 3,
        justifyContent: "center",
    },
    infoText:{ 
        fontSize: 30,
        textAlign: "center", 
        padding: 7,
        color: Colors.primary500,
        fontFamily: "protest",
    },
    buttonContainer: {
        flex: 1, 
        marginTop: 20,
        alignItems: "center",
    }, 
  });