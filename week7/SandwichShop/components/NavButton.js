import { StyleSheet, Text, Pressable, View } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
    return (
      <Pressable 
      onPress={props.onNext}
      style={({ pressed}) => pressed && styles.pressedItem}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{props.children}</Text>
          </View>
        </View>
      </Pressable>
    );
  }
  
  export default NavButton;
  
  const styles = StyleSheet.create({
      buttonContainer: {
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 300,
          backgroundColor: Colors.primary500,
          width: 300,
          marginHorizontal: 10,
          marginVertical: 10,
      },
      pressedItem: {
          opacity: 0.8,
      },
      text: {
          padding: 5,
          fontSize: 25,
          textAlign: "center",
          color: Colors.accent500,
      },
  });