import { Text, StyleSheet } from "react-native";
//Import constants
import Colors from "../constants/colors";

//Function for the title
function Title(props){
    return <Text style={styles.title}>{props.children}</Text>
}
//To be able to export 
export default Title; 

//Styles
const styles = StyleSheet.create({
    title: {
      fontSize: 60,
      textAlign: "center", 
      color: Colors.primary500, 
      fontFamily: "protest",


    },
  });