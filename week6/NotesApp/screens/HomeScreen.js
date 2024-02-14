import { View , StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { Colors } from "react-native/Libraries/NewAppScreen";



function HomeScreen(props) {
    const insets = useSafeAreaInsets();

    return (

        <View>
            
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "90%"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    imageContainer: {
        flex: 2,
        justifyContent: "center",
        borderWidth: 4,
        borderRadius: 55,
        borderColor: Colors.accent500
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 50,
        resizeMode: "stretch"
    },
    navButtonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    }
});